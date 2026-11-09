<!-- Copyright 2026 Adobe. All rights reserved. -->
<!--
  Embeds an Archify diagram (public/diagrams/<name>.html) with the viewer
  chrome hidden, so only the interactive SVG shows on the slide. The delivered
  HTML is left untouched; styles and the deck's light/dark mode are applied to
  the same-origin iframe after it loads.
-->
<script setup>
import { ref, watch } from 'vue'
import { useDarkMode } from '@slidev/client'

const props = defineProps({
  name: { type: String, required: true },
  maxHeight: { type: String, default: '300px' },
})

const src = `${import.meta.env.BASE_URL}diagrams/${props.name}.html`
const frame = ref(null)
const aspect = ref('960 / 440')
const { isDark } = useDarkMode()

// Archify's categories mapped to Spectrum semantic colors (see style.css for the source file):
// frontend=informative blue, backend=positive green, database=indigo, cloud=notice orange,
// security=negative red, messagebus=purple, external=neutral gray.
const palette = {
  light: {
    bg: '#f8f8f8', grid: '#e1e1e1', text: '#131313', muted: '#505050', dim: '#8f8f8f', faint: '#505050',
    panel: '#ffffff', border: '#e1e1e1', lane: '#dadada', arrow: '#8f8f8f', emphasis: '#3b63fb', mask: '#ffffff',
    frontend: ['59,99,251', '#3b63fb'], backend: ['5,131,78', '#05834e'], database: ['113,85,250', '#7155fa'],
    cloud: ['194,78,0', '#c24e00'], security: ['215,50,32', '#d73220'], messagebus: ['166,92,231', '#a65ce7'],
    external: ['80,80,80', '#505050'],
  },
  dark: {
    bg: '#1b1b1b', grid: '#323232', text: '#f2f2f2', muted: '#afafaf', dim: '#6d6d6d', faint: '#afafaf',
    panel: '#222222', border: '#323232', lane: '#393939', arrow: '#6d6d6d', emphasis: '#5681ff', mask: '#222222',
    frontend: ['86,129,255', '#5681ff'], backend: ['9,157,89', '#099d59'], database: ['128,119,254', '#8077fe'],
    cloud: ['224,100,0', '#e06400'], security: ['252,67,46', '#fc432e'], messagebus: ['157,78,228', '#9d4ee4'],
    external: ['175,175,175', '#afafaf'],
  },
}

function spectrumVars(mode) {
  const p = palette[mode]
  const cat = ['frontend', 'backend', 'database', 'cloud', 'security', 'messagebus', 'external']
    .map((k) => `--${k}-fill: rgba(${p[k][0]}, 0.16); --${k}-stroke: ${p[k][1]};`)
    .join(' ')
  return `:root[data-theme="${mode}"] { --bg: ${p.bg}; --grid: ${p.grid}; --text: ${p.text}; --text-muted: ${p.muted}; --text-dim: ${p.dim}; --text-faint: ${p.faint}; --panel: ${p.panel}; --panel-border: ${p.border}; --lane-fill: transparent; --lane-stroke: ${p.lane}; --arrow: ${p.arrow}; --arrow-emphasis: ${p.emphasis}; --mask: ${p.mask}; ${cat} }`
}

const css = `
${spectrumVars('light')}
${spectrumVars('dark')}
svg, svg text { font-family: 'Adobe Clean Spectrum VF', 'Adobe Clean', sans-serif !important; }
.toolbar, .header, .no-print { display: none !important; }
html, body { margin: 0 !important; padding: 0 !important; background: transparent !important; overflow: hidden !important; }
.container { padding: 0 !important; margin: 0 !important; max-width: none !important; width: 100vw !important; }
.diagram-container { border: 0 !important; padding: 0 !important; margin: 0 !important; background: transparent !important; box-shadow: none !important; border-radius: 0 !important; }
.diagram-container > svg { min-width: 0 !important; width: 100vw !important; height: 100vh !important; max-height: 100vh !important; }
`

function applyTheme() {
  const doc = frame.value?.contentDocument
  if (!doc) return
  const mode = isDark.value ? 'dark' : 'light'
  doc.documentElement.setAttribute('data-theme', mode)
  // A color-scheme mismatch with the parent makes the iframe canvas opaque.
  doc.documentElement.style.colorScheme = mode
}

function onLoad() {
  const doc = frame.value?.contentDocument
  if (!doc) return
  const style = doc.createElement('style')
  style.textContent = css
  doc.head.appendChild(style)
  const svg = doc.querySelector('.diagram-container > svg')
  if (svg) {
    // Crop to the drawn content; Archify's minimum viewBox leaves wide margins.
    const [, , vw, vh] = (svg.getAttribute('viewBox') || '').split(/\s+/).map(Number)
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
    for (const el of svg.children) {
      if (typeof el.getBBox !== 'function') continue
      const b = el.getBBox()
      if (!b.width && !b.height) continue
      if (b.width >= vw && b.height >= vh) continue
      x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y)
      x1 = Math.max(x1, b.x + b.width); y1 = Math.max(y1, b.y + b.height)
    }
    if (Number.isFinite(x0)) {
      const pad = 8
      const box = [x0 - pad, y0 - pad, x1 - x0 + pad * 2, y1 - y0 + pad * 2]
      svg.setAttribute('viewBox', box.join(' '))
      aspect.value = `${box[2]} / ${box[3]}`
    } else if (vw && vh) {
      aspect.value = `${vw} / ${vh}`
    }
  }
  applyTheme()
}

watch(isDark, applyTheme)
</script>

<template>
  <iframe
    ref="frame"
    :src="src"
    :style="{ aspectRatio: aspect, height: props.maxHeight, colorScheme: isDark ? 'dark' : 'light' }"
    class="block w-auto max-w-full mx-auto border-0 bg-transparent"
    @load="onLoad"
  />
</template>

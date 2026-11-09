/* Copyright 2026 Adobe. All rights reserved. */
import { defineShikiSetup } from '@slidev/types'

// Same token-to-color mapping as the React Spectrum docs site (s2-docs Code.tsx),
// with Spectrum light/dark palette values from packages/tokens/src/color-palette.json.
const palette = {
  light: { fg: '#292929', comment: '#505050', keyword: '#ba1650', string: '#036e45', number: '#b01f7b', property: '#6338ee', fn: '#b72818', variable: '#9c28af' },
  dark: { fg: '#dbdbdb', comment: '#afafaf', keyword: '#ff6095', string: '#0eaf62', number: '#fb5ac4', property: '#8b8dfe', fn: '#ff6756', variable: '#e85bfd' },
}

function theme(name: string, type: 'light' | 'dark') {
  const c = palette[type]
  return {
    name,
    type,
    colors: { 'editor.foreground': c.fg, 'editor.background': type === 'light' ? '#f8f8f8' : '#1b1b1b' },
    settings: [
      { settings: { foreground: c.fg } },
      { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: c.comment, fontStyle: 'italic' } },
      { scope: ['keyword', 'storage', 'constant.language', 'keyword.operator.new'], settings: { foreground: c.keyword } },
      { scope: ['string', 'string.quoted', 'punctuation.definition.string'], settings: { foreground: c.string } },
      { scope: ['constant.numeric', 'constant.character'], settings: { foreground: c.number } },
      { scope: ['support.type.property-name', 'meta.object-literal.key', 'entity.other.attribute-name', 'variable.other.property'], settings: { foreground: c.property } },
      { scope: ['entity.name.function', 'support.function', 'entity.name.tag', 'entity.name.type', 'support.class', 'variable.function'], settings: { foreground: c.fn } },
      { scope: ['variable', 'variable.parameter', 'variable.other', 'support.variable'], settings: { foreground: c.variable } },
      { scope: ['punctuation', 'meta.brace'], settings: { foreground: c.comment } },
    ],
  }
}

export default defineShikiSetup(() => ({
  themes: { light: theme('spectrum-light', 'light'), dark: theme('spectrum-dark', 'dark') },
}))

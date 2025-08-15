// Hierarchical data from information-hierarchy.md
const data = {
  "name": "Spectrum Design Information Locations",
  "value": 100,
  "children": [
    {
      "name": "Design Data",
      "value": 100,
      "children": [
        {
          "name": "Design Tokens",
          "value": 100,
          "categories": ["structured-data", "design-system", "llm", "mcp"]
        },
        {
          "name": "Component Options API",
          "value": 100,
          "categories": ["structured-data", "api", "dev-tools", "llm", "mcp"]
        },
        {
          "name": "Component Anatomy",
          "value": 100,
          "categories": ["documentation", "design-system", "llm"]
        },
        {
          "name": "CI/CD",
          "value": 100,
          "children": [
            {
              "name": "Changelogs",
              "value": 100,
              "categories": ["structured-data", "documentation", "generated", "llm", "mcp"]
            },
            {
              "name": "Data Diff",
              "value": 100,
              "categories": ["generated", "dev-tools", "mcp"]
            },
            {
              "name": "Release notes",
              "value": 100,
              "categories": ["documentation", "generated", "llm"]
            }
          ]
        }
      ]
    },
    {
      "name": "Design Assets",
      "value": 100,
      "children": [
        {
          "name": "S2 Specs",
          "value": 100,
          "categories": ["documentation", "design-system", "llm"]
        },
        {
          "name": "Figma libraries, variables, styles, components",
          "value": 100,
          "categories": ["design-assets", "design-system", "mcp"]
        }
      ]
    },
    {
      "name": "Tooling",
      "value": 100,
      "children": [
        {
          "name": "LLM",
          "value": 100,
          "categories": ["ai-tools", "dev-tools", "llm", "mcp"]
        },
        {
          "name": "MCP",
          "value": 100,
          "categories": ["ai-tools", "api", "dev-tools", "llm", "mcp"]
        },
        {
          "name": "Linting",
          "value": 100,
          "categories": ["dev-tools", "automated", "mcp"]
        },
        {
          "name": "Visual Diff",
          "value": 100,
          "categories": ["dev-tools", "generated", "automated", "mcp"]
        },
        {
          "name": "Metrics",
          "value": 100,
          "categories": ["structured-data", "analytics", "llm", "mcp"]
        },
        {
          "name": "Generated Assets",
          "value": 100,
          "children": [
            {
              "name": "Sprite sheet",
              "value": 100,
              "categories": ["generated", "design-assets", "mcp"]
            },
            {
              "name": "AI Training data",
              "value": 100,
              "categories": ["ai-training", "structured-data", "generated", "llm", "mcp"]
            }
          ]
        }
      ]
    },
    {
      "name": "Documentation",
      "value": 100,
      "children": [
        {
          "name": "Spectrum Design Website",
          "value": 100,
          "categories": ["documentation", "public", "llm"]
        },
        {
          "name": "Engineering Documentation",
          "value": 100,
          "categories": ["documentation", "technical", "llm", "mcp"]
        },
        {
          "name": "Training",
          "value": 100,
          "categories": ["ai-training", "documentation", "llm"]
        }
      ]
    },
    {
      "name": "Partnership and discussion",
      "value": 100,
      "children": [
        {
          "name": "Slack messages",
          "value": 100,
          "children": [
            {
              "name": "QOTD",
              "value": 100,
              "categories": ["conversational", "public", "llm"]
            },
            {
              "name": "Help",
              "value": 100,
              "categories": ["conversational", "support", "llm", "mcp"]
            },
            {
              "name": "Other messages",
              "value": 100,
              "categories": ["conversational", "support"]
            }
          ]
        },
        {
          "name": "Meetings",
          "value": 100,
          "children": [
            {
              "name": "Design workshop",
              "value": 100,
              "categories": ["conversational", "collaborative", "design-process", "llm"]
            },
            {
              "name": "Regular partnership meetings",
              "value": 100,
              "categories": ["conversational", "collaborative", "strategic", "llm"]
            },
            {
              "name": "Ad-hoc huddles",
              "value": 100,
              "categories": ["conversational", "collaborative", "informal"]
            }
          ]
        },
        {
          "name": "Shared knowledge",
          "value": 100,
          "categories": ["tacit-knowledge", "undocumented"]
        }
      ]
    },
    {
      "name": "Assumptions",
      "value": 100,
      "categories": ["tacit-knowledge", "undocumented"]
    }
  ]
};

// Highlight mode configurations
const highlightModes = {
  none: {
    name: "Default View",
    description: "Standard visualization"
  },
  llm: {
    name: "LLM Training Suitable",
    description: "Information well-suited for Large Language Model training",
    color: "#378EF0"
  },
  mcp: {
    name: "MCP Integration Suitable", 
    description: "Information that can be effectively accessed via Model Context Protocol",
    color: "#0265DC"
  },
  both: {
    name: "LLM & MCP Suitable",
    description: "Information suitable for both LLM training and MCP integration",
    color: "#014BC4"
  },
  category: {
    name: "By Category",
    description: "Group by information type (shows primary category)",
    colors: {
      "structured-data": "#378EF0",
      "documentation": "#7CC7F7", 
      "ai-training": "#014BC4",
      "ai-tools": "#0265DC",
      "conversational": "#B8E0FA",
      "design-assets": "#E8F4FD",
      "dev-tools": "#0D3F9F",
      "generated": "#1B2F5F",
      "design-system": "#B8E0FA",
      "api": "#378EF0",
      "automated": "#0D3F9F",
      "analytics": "#378EF0",
      "public": "#E8F4FD",
      "technical": "#7CC7F7",
      "support": "#B8E0FA",
      "collaborative": "#E8F4FD",
      "design-process": "#7CC7F7",
      "strategic": "#014BC4",
      "informal": "#B8E0FA",
      "tacit-knowledge": "#cccccc",
      "undocumented": "#cccccc",
      "llm": "#378EF0",
      "mcp": "#0265DC"
    }
  }
};



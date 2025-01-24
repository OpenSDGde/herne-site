// tailwind.config.js
module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./*.{html,md}",
    "./theme-repo/_drafts/**/*.md",
    "./theme-repo/_includes/**/*.html",
    "./theme-repo/_layouts/**/*.html",
    "./theme-repo/_pages/*.{html,md}",
    "./theme-repo/_posts/*.md",
    "./theme-repo/*.{html,md}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}


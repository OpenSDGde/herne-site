// tailwind.config.js
module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./*.{html,md}",
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


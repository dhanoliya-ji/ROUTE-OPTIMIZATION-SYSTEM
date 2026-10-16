// PostCSS pipeline. Vite picks this up automatically for every stylesheet.
//
// One plugin. Tailwind v4 expands its directives and @apply rules into real
// CSS, and also adds the vendor prefixes autoprefixer used to (it runs
// Lightning CSS internally), so autoprefixer is no longer needed.
export default {
  plugins: {
    // Generates the utility classes actually used, based on the @source
    // paths declared in src/index.css.
    "@tailwindcss/postcss": {},
  },
};

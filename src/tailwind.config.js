/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "m-3white": "var(--m-3white)",
        "m3-schemes-on-surface": "var(--m3-schemes-on-surface)",
        "m3-schemes-on-surface-variant": "var(--m3-schemes-on-surface-variant)",
        "m3-schemes-outline": "var(--m3-schemes-outline)",
        "m3-schemes-outline-variant": "var(--m3-schemes-outline-variant)",
        "m3-schemes-primary-container": "var(--m3-schemes-primary-container)",
        "m3-schemes-secondary": "var(--m3-schemes-secondary)",
        "m3-schemes-secondary-container":
          "var(--m3-schemes-secondary-container)",
        "m3-schemes-surface": "var(--m3-schemes-surface)",
        "m3-schemes-surface-container": "var(--m3-schemes-surface-container)",
        "m3-state-layers-on-primary-container-opacity-08":
          "var(--m3-state-layers-on-primary-container-opacity-08)",
        "m3-state-layers-on-secondary-container-opacity-08":
          "var(--m3-state-layers-on-secondary-container-opacity-08)",
        "m3-state-layers-on-secondary-container-opacity-10":
          "var(--m3-state-layers-on-secondary-container-opacity-10)",
        "m3-state-layers-on-surface-opacity-08":
          "var(--m3-state-layers-on-surface-opacity-08)",
        "m3-state-layers-on-surface-opacity-10":
          "var(--m3-state-layers-on-surface-opacity-10)",
        "m3-state-layers-on-surface-variant-opacity-08":
          "var(--m3-state-layers-on-surface-variant-opacity-08)",
      },
      fontFamily: {
        "m3-body-large": "var(--m3-body-large-font-family)",
        "m3-body-medium": "var(--m3-body-medium-font-family)",
        "m3-body-small": "var(--m3-body-small-font-family)",
        "m3-headline-small": "var(--m3-headline-small-font-family)",
        "m3-label-medium": "var(--m3-label-medium-font-family)",
        "m3-label-small": "var(--m3-label-small-font-family)",
        "m3-title-large": "var(--m3-title-large-font-family)",
      },
      boxShadow: {
        "m3-elevation-light-3": "var(--m3-elevation-light-3)",
        "m3-elevation-light-4": "var(--m3-elevation-light-4)",
      },
    },
  },
  plugins: [],
};
module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        container: "var(--container)",
        "container-lg": "var(--container-lg)",
        "2xl": "41rem",
      },
      spacing: {
        container: "var(--container-padding)",
      },
      fontSize: {
        md: [".9375rem", "1.45rem"],
        "2xl": ["1.375rem", "1.75rem"],
        "5xl": ["2.5rem", "2.75rem"],
        "7xl": ["5rem", "5.25rem"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "secondary-dark": "var(--secondary-dark)",
        tertiary: "var(--tertiary)",
        gray: {
          darkest: "#1f1f1f",
          darker: "#222222",
          dark: "#666666",
          base: "#999999",
          light: "#cccccc",
          lighter: "#dddddd",
          lightest: "#f2f6f7",
        },
      },
      boxShadow: {
        magical: "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
    },
  },
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "dark",
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

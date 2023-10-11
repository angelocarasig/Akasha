module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dracula"],
    darkTheme: "dracula",
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

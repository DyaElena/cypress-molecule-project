const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    baseUrl: "https://www.molecule.to/",
    experimentalStudio: true,
    setupNodeEvents(on, config) {},
    specPattern: "cypress/**/*.spec.{js,jsx,ts,tsx}",
  },
});

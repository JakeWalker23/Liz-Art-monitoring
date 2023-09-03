const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lizzyshort.com",
    setupNodeEvents(on, config) {

    },
  },
});

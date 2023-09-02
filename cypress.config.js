const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging.lizzyshort.com",
    setupNodeEvents(on, config) {

    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "226ikv",
  "retries":1,
  e2e: {
    "baseUrl": "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
  },
});

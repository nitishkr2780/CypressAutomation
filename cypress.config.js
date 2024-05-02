const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 8000,
  viewportWidth: 1250,
  viewportHeight: 800,

  e2e: {
    baseUrl:'https://app.chatwoot.com/app/',
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
  },
});


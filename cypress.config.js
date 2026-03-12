const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  retries: 2,
  e2e: {
    specPattern: "cypress/src/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://practicesoftwaretesting.com",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 0,
  }

});

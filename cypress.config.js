const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  video: true,
  retries: 1,
  e2e: {
    specPattern: "cypress/src/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://practicesoftwaretesting.com",
  }

});

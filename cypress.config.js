const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL: 'petstore.swagger.io/v2'
  },
});

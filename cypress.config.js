const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'u5cndd',
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

 e2e: {
    baseUrl: 'https://pushing-it.vercel.app',
    watchForFileChanges: true,
    setupNodeEvents(on, config) {

    },
    env: {
      usuario: "pushingit",
      contraseña: "123456!"
    }

  },

});




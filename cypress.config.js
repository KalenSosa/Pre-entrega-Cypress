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
      // implement node event listeners here si los necesitás
    },
    
    //diferentes usuarios para roles
    env: {
    admin: {
      "usuario": "pushingit",
      "contraseña": "123456!",
    },

  },
},
});
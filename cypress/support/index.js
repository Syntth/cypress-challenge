// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    ignore: (xhr) => {
        return false;
    }
})

// ignore uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
    return false
})
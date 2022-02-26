// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('switchTheme', () => {
    cy.get('.ant-switch').first().invoke('text').should('eq','dark')
    cy.get('.ant-switch').first().click()
    cy.get('.ant-switch').first().invoke('text').should('eq','light')
})

Cypress.Commands.add('switchNav', () => {
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > :nth-child(2)').click()
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > .ant-menu-item-selected').contains('Navigation Two')
})

Cypress.Commands.add('closesAndOpenSubmenu', () => {
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > .ant-menu-submenu-open > [aria-expanded="true"]').click()
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > :nth-child(4) > .ant-menu-submenu-title').click()
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > :nth-child(4) > .ant-menu-submenu-title').contains('Navigation Four')
    cy.get('#components-menu-demo-menu-themes > .code-box-demo > div[data-v-a1ccd506=""] > .ant-menu-root > .ant-menu-submenu-open > .ant-menu > :nth-child(1)').contains('Option 7')
})

Cypress.Commands.add('validateCalculateButton', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#calculateButton').click()
    if (a == 0) {
        cy.get('.calc_error').contains('a cannot be 0')
        cy.log('Button is working, non Quadratic expression entered')
    } else{ 
        cy.get('#answer').contains('root')
        cy.log('Button is working, Quadratic expression entered')
    }
})

Cypress.Commands.add('validateClearButton', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#actionClear').click()
    cy.get('#a').invoke('val').should('be.empty')
    cy.get('#b').invoke('val').should('be.empty')
    cy.get('#c').invoke('val').should('be.empty')
})

Cypress.Commands.add('notQuadratic', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#calculateButton').click()
    cy.get('.calc_error').contains('a cannot be 0')
})

Cypress.Commands.add('realRoots', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#calculateButton').click()
    cy.get('#answer').contains('two real roots')
})

Cypress.Commands.add('imaginaryRoots', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#calculateButton').click()
    cy.get('#answer').contains('complex roots')
})

Cypress.Commands.add('equalRoots', (a,b,c) => {
    cy.get('#a').type(a)
    cy.get('#b').type(b)
    cy.get('#c').type(c)
    cy.get('#calculateButton').click()
    cy.get('#answer').contains('one real root')
})

Cypress.Commands.add('signin', () => {
    cy.get('#username').type(Cypress.env('user'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#Imgur').click()
})

Cypress.Commands.add('upload', () => {
    cy.get('.upload-button').click()
    //upload
    cy.get('input[type=file]').attachFile('hammer.jpeg')
    cy.wait(3000)
    cy.get('.Toast-message--check').should('be.visible')
    cy.get('.UploadPost-postTitle > .UploadPost-editable').type('Here is your Image Tittle')
    cy.get('.ImageDescription-editable').type('Here is your Image Description')
    cy.wait(3000)
    cy.get('.Button-community').click()
})
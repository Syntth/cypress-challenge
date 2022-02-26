/// <reference types="cypress" />

describe('Create Test Cases for image upload', () => {
    beforeEach(() => {
        cy.visit('https://imgur.com/signin')
    })

    it('Upload an image with tittle and description and validates the succesfull upload message', () => {
        cy.signin()
        cy.upload()
    })
})
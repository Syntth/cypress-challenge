/// <reference types="cypress" />

describe('Create Test Cases for the Quadratic Formula', () => {
    beforeEach(() => {
        cy.visit('https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php')
    })

    it('Validate calculate button is working', () => {
        cy.validateCalculateButton(0,5,8)
    })

    it('Validate clear button is working', () => {
        assert.isOk(cy.validateClearButton(0,5,8))
    })
    
    it('Validates Not Quadratic when a=0 b=5 c=5', () => {
        assert.isOk(cy.notQuadratic(0,5,5))
    })

    it('Validates Real Roots when a=1 b=5 c=5', () => {
        assert.isOk(cy.realRoots(1,5,5))
    })

    it('Validate Imaginary Roos when a=9 b=5 c=5', () => {
        assert.isOk(cy.imaginaryRoots(9,5,5))
    })

    it('Validate Equal Roots when a=5 b=10 c=5', () => {
        assert.isOk(cy.equalRoots(5,10,5))
    })
})
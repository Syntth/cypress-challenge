/// <reference types="cypress" />

describe('Objective 1', () => {
  beforeEach(() => {
    cy.visit('https://www.antdv.com/components/menu/#Menu-Themes')
  })

  it('Switch the selected theme', () => {
    cy.switchTheme()
  })

  it('Switch from Navigation 1 to Navigation 2', () => {
    cy.switchNav()
  })

  it('Closes Submenu 3 and Open Submenu 4', () => {
    cy.closesAndOpenSubmenu()
  })
})


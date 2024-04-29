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
/// <reference  types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  Cypress.Commands.add('login',(username,password)=>
  {
    cy.session([username,password],()=>{

      cy.visit('/')
      cy.get('h2').contains('Login to Chatwoot').should('be.visible')
      cy.get("[data-testid='email_input']").clear().type(username)
      cy.get("[data-testid='password_input']").clear().type(password)
      cy.get("[data-testid='submit_button']").click()
      cy.wait(5000) //without this can't handle
    },
    {
      cacheAcrossSpecs :true

    })

   

  })


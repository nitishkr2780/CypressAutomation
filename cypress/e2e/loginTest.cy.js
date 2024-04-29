describe('Login Tests', () => {
  const credentials = require('../fixtures/credentialData').credentials;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid credentials', () => {
    const { username, password } = credentials.validCredentials;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('img[alt="Chatwoot"]').should('be.visible');


  });

  it('Login with invalid email but valid password', () => {
    const { username, password } = credentials.invalidEmailValidPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');
  });

  it('Login with valid email but incorrect password', () => {
    const { username, password } = credentials.validEmailIncorrectPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

  it('Login with empty email but valid password', () => {
    const { username, password } = credentials.emptyEmailValidPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

  it('Login with valid email but empty password', () => {
    const { username, password } = credentials.validEmailEmptyPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

  it('Login with incorrect email format but valid password', () => {
    const { username, password } = credentials.incorrectEmailFormatValidPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

  it('Login with valid email but short password', () => {
    const { username, password } = credentials.validEmailShortPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

  it('Login with valid email but long password', () => {
    const { username, password } = credentials.validEmailLongPassword;
    cy.get("[data-testid='email_input']").clear().type(username);
    cy.get("[data-testid='password_input']").clear().type(password);
    cy.get("[data-testid='submit_button']").click();
    cy.get('h2').contains('Login to Chatwoot').should('be.visible');

  });

});

import Login from "./pageObject/loginPage";

const login = new Login();

describe('Login Tests', () => {
  const credentials = require('../fixtures/credentialData').credentials;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login with valid credentials', () => {
    const { username, password } = credentials.validCredentials;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.chatwootTitleDisplayed()
  });

  it('Login with invalid email but valid password', () => {
    const { username, password } = credentials.invalidEmailValidPassword;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.loginToPageTitleDisplayed(); 
   });

  it('Login with valid email but incorrect password', () => {
    const { username, password } = credentials.validEmailIncorrectPassword;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.loginToPageTitleDisplayed(); 
  });

  it('Login with empty email but valid password', () => {
    const { username, password } = credentials.emptyEmailValidPassword;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.loginToPageTitleDisplayed(); 
  });

  it('Login with valid email but empty password', () => {
    const { username, password } = credentials.validEmailEmptyPassword;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.loginToPageTitleDisplayed(); 
  });

  it('Login with incorrect email format but valid password', () => {
    const { username, password } = credentials.incorrectEmailFormatValidPassword;
    login.setUsername(username);
    login.setPassword(password);
    login.clickSubmit()
    login.loginToPageTitleDisplayed(); 

  });

  // it('Login with valid email but short password', () => {
  //   const { username, password } = credentials.validEmailShortPassword;
  //   login.setUsername(username);
  //   login.setPassword(password);
  //   login.clickSubmit()
  //   login.loginToPageTitleDisplayed(); 

  // });

  // it('Login with valid email but long password', () => {
  //   const { username, password } = credentials.validEmailLongPassword;
  //   login.setUsername(username);
  //   login.setPassword(password);
  //   login.clickSubmit()
  //   login.loginToPageTitleDisplayed(); 
  // });

});

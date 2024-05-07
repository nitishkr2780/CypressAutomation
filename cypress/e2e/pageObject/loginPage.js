const locators ={
    
    txtUserName:"[data-testid='email_input']",
    txtPassword:"[data-testid='password_input']",
    btnSubmit:"[data-testid='submit_button']",
    txtloginTitle:"//h2[normalize-space()='Login to Chatwoot']",
    imgchatwoot: 'img[alt="Chatwoot"]'

}

class Login{

    
     setUsername(username){
      cy.get(locators.txtUserName).clear() 
      cy.get(locators.txtUserName).type(username)

     }

     setPassword(password){
      cy.get(locators.txtPassword).clear()
      cy.get(locators.txtPassword).type(password)
     }


     clickSubmit(){
      cy.get(locators.btnSubmit).click()
     }

     loginToPageTitleDisplayed(){
          cy.xpath(locators.txtloginTitle).should('exist');
    }
    chatwootTitleDisplayed(){
        cy.get(locators.imgchatwoot).should('be.visible');
    }
    



}
export  default Login;
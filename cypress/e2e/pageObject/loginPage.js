class Login{

     txtUserName="[data-testid='email_input']";
     txtPassword="[data-testid='password_input']";
     btnSubmit="[data-testid='submit_button']";
     txtloginTitle="//h2[normalize-space()='Login to Chatwoot']";



     setUsername(username){
      cy.get(this.txtUserName).clear() 
      cy.get(this.txtUserName).type(username)

     }

     setPassword(password){
      cy.get(this.txtPassword).clear()
      cy.get(this.txtPassword).type(password)
     }


     clickSubmit(){
      cy.get(this.btnSubmit).click()
     }

     loginToPageTitleDisplayed(){
         return cy.xpath(this.txtloginTitle)
     }
}
export  default Login;
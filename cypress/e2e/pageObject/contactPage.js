
const locator={
nameInput :'input[placeholder="Enter the full name of the contact"]',
emailInput : 'input[placeholder="Enter the email address of the contact"]',
bioInput :  'textarea[placeholder="Enter the bio of the contact"]',
cityName:'input[placeholder="Enter the city name"',
btnSubmit:'button[data-testid="submit_button"] span',
countryname:'Anguilla (AI)',
phNo:'+916004568456'

};

class ContactsPage {

    get contactsLink() {
        return cy.get('[href="/app/accounts/96049/contacts"]');
    }

    get contactsHeader() {
        return cy.get('.m-0');
    }

    clickContactsLink() {
        this.contactsLink.click();
    }

    verifyContactsHeaderVisibility() {
        this.contactsHeader.should('be.visible');
    }

       clickNewcontact(){
        cy.get('span').contains('New Contact').click() 
       }

       verifycreateNewContactTitle(){
        cy.get('h2').contains('Create new contact').should('be.exist')

       }
       verifyContactofAnyUser(){
        cy.get('td').contains(locator.phNo).should('exist')
       }

       fillName(fullname){
        cy.get(locator.nameInput).type(fullname)

       }

       fillEmail(email){
        cy.get(locator.emailInput).type(email)

       }

       fillBio(bio){
        cy.get(locator.bioInput).type(bio)
       }

       selectCountry(){
        cy.get('.multiselect__single').click()
        cy.get('#listbox-null  span>span').contains(locator.countryname).click()

       }

       fillCity(city){
        cy.get(locator.cityName).type(city)
      }

       clickSubmit(){
        cy.get(locator.btnSubmit).click()
      }
}

export default  ContactsPage;


const locator={
nameInput :'input[placeholder="Enter the full name of the contact"]',
emailInput : 'input[placeholder="Enter the email address of the contact"]',
bioInput :  'textarea[placeholder="Enter the bio of the contact"]',
companyName:'input[placeholder="Enter the company name"]',
cityName:'input[placeholder="Enter the city name"',
btnSubmit:'button[data-testid="submit_button"] span',
countryname:'Anguilla (AI)',
countryPhCode:'+91',
InputphoneNo  :'input[placeholder="Enter the phone number of the contact"]',
addNote:'p[data-placeholder="Add a note"]'

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

    clickEditContacts(){
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]/*[name()='svg'][1]").click()

        // i tried these  ,  but i failed to  get locator
        // cy.get('.button.smooth.button--only-icon.small.primary.has-tooltip').click()
        // cy.xpath("//button[@class='button smooth button--only-icon small primary has-tooltip']").click()
        // cy.get('.button smooth button--only-icon small primary has-tooltip').click()

        // cy.xpath("//button[@type='submit'][@class='button smooth button--only-icon small primary has-tooltip']").click()
        // cy.contains('button', '$t(\'EDIT_CONTACT.BUTTON_LABEL\')').click();

        // cy.xpath("//*[name()='path' and contains(@d,'M21.03 2.9')]").click()
        // cy.xpath("//button[@class='button smooth button--only-icon small primary has-tooltip v-tooltip-open']//*[name()='svg']").click()
        // cy.get('button[data-original-title]:nth-child(2)').click()
    }
   

    fillName(fullname){
    cy.get(locator.nameInput).clear().type(fullname)

    }

    fillEmail(email){
    cy.get(locator.emailInput).clear().type(email)

    }

    fillBio(bio){
    cy.get(locator.bioInput).clear().type(bio)
    }

    selectCountryCode(code){
        cy.get('.cursor-pointer').click()
        cy.get('.country-dropdown--item').contains(locator.countryPhCode).clear().click()
    }
    fillMobileNo(phNo){
        cy.get(locator.InputphoneNo).clear().type(phNo)
    }
    fillCompanyName(company){
        cy.get(locator.companyName).clear().type(company)
    }

    selectCountry(){
    cy.get('.multiselect__single').click()
    cy.get('#listbox-null  span>span').contains(locator.countryname).click()

    }

    fillCity(city){
    cy.get(locator.cityName).clear().type(city)
    }

    clickSubmit(){
    cy.get(locator.btnSubmit).click()
    }

   clickOnPersonNametoEdit(personName){
    
    cy.get('a').contains(personName).should('exist').click()
   }

    addNoteAndSubmit(note){
        cy.get(locator.addNote).type(note)
        cy.get('span').contains('Add (⌘⏎)').click();
    }

    clickOnDeleteAndCnfirmDelete(){
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/button[4]/*[name()='svg'][1]").click() //same not able to find
    cy.get('span').contains('Yes, Delete').click()

    }

    verifyContactDeleted(){
        cy.contains('Contact deleted successfully').should('exist')
    }

    
}


export default  ContactsPage;

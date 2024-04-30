const locators = {

  contactIcon: '[href="/app/accounts/96049/contacts"]',
  nameInput: 'input[placeholder="Enter the full name of the contact"]',
  emailInput: 'input[placeholder="Enter the email address of the contact"]',
  bioInput: 'textarea[placeholder="Enter the bio of the contact"]',
  companyName: 'input[placeholder="Enter the company name"]',
  cityName: 'input[placeholder="Enter the city name"',
  btnSubmit: 'button[data-testid="submit_button"] span',
  countryname: "Anguilla (AI)",
  countryPhCode: "+91",
  InputphoneNo: 'input[placeholder="Enter the phone number of the contact"]',
  addNote: 'p[data-placeholder="Add a note"]',
  lastContact:'table[class="ve-table-content ve-table-border-x"]>tbody>tr:last-child>td:first-child a',
  editIcon:"//*[local-name()='svg'][@class='flex-shrink-0 icon icon--font edit']",
  deleteIcon:"//*[local-name()='svg'][@class='flex-shrink-0 icon icon--font delete']"

};

class ContactsPage {
    clickContactsLink() {
    cy.get(locators.contactIcon).click();
  }

  verifyContactsHeaderVisibility() {
    cy.get(".m-0").should("be.visible");
  }

  clickNewcontact() {
    cy.get("span").contains("New Contact").click();
  }

  verifycreateNewContactTitle() {
    cy.get("h2").contains("Create new contact").should("be.exist");
  }

  selectLastPerson(){
    cy.get(locators.lastContact).click()
    cy.xpath("//button[normalize-space()='Contacts']").should('be.visible')
  }

  clickEditContacts() {
    cy.xpath(locators.editIcon).click()
    cy.get('div[class="settings-item"] label span').should('be.visible')
  }

  fillName(fullname) {
    cy.get(locators.nameInput).clear().type(fullname);
  }

  fillEmail(email) {
    cy.get(locators.emailInput).clear().type(email);
  }

  fillBio(bio) {
    cy.get(locators.bioInput).clear().type(bio);
  }

  selectCountryCode(code) {
    cy.get(".cursor-pointer").click();
    cy.get(".country-dropdown--item").contains(locators.countryPhCode).click();
  }
  fillMobileNo(phNo) {
    cy.get(locators.InputphoneNo).clear().type(phNo);
  }
  fillCompanyName(company) {
    cy.get(locators.companyName).clear().type(company);
  }

  selectCountry() {
    cy.get(".multiselect__single").click();
    cy.get("#listbox-null  span>span").contains(locators.countryname).click();
  }

  fillCity(city) {
    cy.get(locators.cityName).clear().type(city);
  }

  clickSubmitAndVerify() {
    cy.get(locators.btnSubmit).click();
    cy.contains("Contact saved successfully");
  }

  addNoteAndSubmit(note) {
    cy.get(locators.addNote).type(note);
    cy.get("span").contains("Add (⌘⏎)").click();
  }

  clickOnDeleteAndCnfirmDelete() {
    cy.xpath(locators.deleteIcon).click(); 
    cy.get("span").contains("Yes, Delete").click();
  }

  verifyContactDeleted() {
    cy.contains("Contact deleted successfully").should("exist");
  }

  clickAndSelectlabel(){
    cy.get('span').contains('Add Labels').click()
    cy.get('span[title="group1"]').click()
  }

}

export default ContactsPage;

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
  editIcon:"//*[local-name()='svg'][@class='flex-shrink-0 icon icon--font edit']"
  
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
  }

  clickEditContacts() {

    cy.xpath("//button[normalize-space()='Contacts']").should('be.visible')
    cy.xpath(locators.editIcon).click()
    cy.get('div[class="settings-item"] label span').should('be.visible')
    

    // cy.xpath("/html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]/*[name()='svg'][1]").click();

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
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/button[4]/*[name()='svg'][1]"
    ).click(); //same not able to find
    cy.get("span").contains("Yes, Delete").click();
  }

  verifyContactDeleted() {
    cy.contains("Contact deleted successfully").should("exist");
  }

}

export default ContactsPage;

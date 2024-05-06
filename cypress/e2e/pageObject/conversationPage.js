const locators = {
  finalDelete: "button.button.action-button.smooth.alert",
  chatSection: ".ProseMirror.ProseMirror-woot-style",
  sortConversation: '[data-v-79d9874c][data-original-title="null"]',
  lastPersonChat: '[role="listitem"]:last-child',
  sortOption: ".dropdown-pane > :nth-child(1) > .bg-slate-25",
  newLabel: "[data-testid='sidebar-new-label-button']",
  addConversationLabel: ".label--add",
  firstConversationLabel: ".dropdown-menu__item.list-none.mb-1:first-child [class='label-text']",
  labelNameInput: "[data-testid='label-title'] > input",
  labelDescriptionInput: "[data-testid='label-description'] > input",
  labelCreateButton: "[data-testid='label-submit']",
  currentUser:'span[class="text-base font-medium leading-tight text-slate-900 dark:text-slate-100"]',
  searchconversation:'[href="/app/accounts/96049/search"]',
  cannedSortCodeInput:'label > input',
  cannedResponsesSubmitBtn:'[data-testid="submit_button"] > span',
  recentCannedMessage:'ul[class="vertical dropdown menu"]>li:last-child',
  chatFileUploadInput:'.file-uploads > label',
  fileLocation:'/home/nitish/Pictures/Screenshots/contactBot.png',
  searchInput:'input[placeholder="Type 3 or more characters to search"]'


};

let txtMessage;

class ConversationsPage {
  clickconversationIcon() {
    cy.get("a").contains("CONVERSATIONS").click({ force: true });
  }

  clickOnNewLabel() {
    // cy.get('.-ml-3').click()
    cy.get(locators.newLabel).click();
  }

  filllabelNameAndDescription(userlabelName, userlabelDescription) {
    cy.get(locators.labelNameInput).type(userlabelName);
    cy.get(locators.labelDescriptionInput).type(userlabelDescription);
  }

  clickCreateLabel() {
    cy.get(locators.labelCreateButton).click();
  }
  clickSortConversation() {
    cy.get(locators.sortConversation).click();
    cy.get("span").contains("Status").should("exist");
  }
  selectSortOption(option) {
    cy.get(locators.sortOption).select(option).should("have.value", option);
  }

  clickAllIcon() {
    cy.get(".tabs > :nth-child(3) > a").click();
  }

  clickLastConversationUser() {
    cy.get(locators.lastPersonChat).click();
  }


  clickchatSectionAndTypingMessage(message) {
    txtMessage = message;
    cy.get(locators.chatSection).type(message);
  }

  selectRecentCannedMessage(){
    cy.get(locators.recentCannedMessage).click()
  }
  selectFileFromGallaryAndUploadInChat(){
    cy.get(locators.chatFileUploadInput).selectFile(locators.fileLocation)
    cy.contains('contactBot.png').should('exist')

  }
  clickOnSendMessage() {
    cy.get("span").contains("Send (⌘ + ↵)").click();
  }
  clickthree_dot() {
    cy.contains("li", txtMessage).find('button[type="submit"]').click();
  }

  clickOnAddToCannedResponses(shortcode){
    cy.get('p').contains('Add to canned responses').click();
    cy.get(locators.cannedSortCodeInput).type(shortcode)
    cy.get(locators.cannedResponsesSubmitBtn).click()
  }

  clickdeleteOption() {
    cy.get("p").contains("Delete").click();
  }

  clickfinalDelete() {
    cy.get(locators.finalDelete).click();
  }

  clickOnCurrentUser() {
    cy.get('.gap-2 > .button > .button__content').then(($spanText) => {
      if ($spanText.text().trim() ==='More details') {
        cy.get(locators.currentUser).click();
      } else {
        cy.get(locators.currentUser).should("exist");
      }
    });
  }

  clickddLabel() {
    cy.get(locators.addConversationLabel).click();
    cy.get(locators.firstConversationLabel).click();
  }

  getCurrentUserName() {
    return cy.get(locators.currentUser)
               .should("exist")
               .invoke("text")
               .then((userNameText) => {
                     return userNameText.trim();
                });
  }

  clickOnSearchConversation(){
    cy.get(locators.searchconversation).click()
  }
  typeAndSearchAnything(text){
  cy.get(locators.searchInput).type(text)
  }
}

export default ConversationsPage;

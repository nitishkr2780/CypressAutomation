
const locators= {

    finalDelete :'button.button.action-button.smooth.alert',
    chatSection:'.ProseMirror.ProseMirror-woot-style',
    sortConversation:'[data-v-79d9874c][data-original-title="null"]',
    lastPersonChat:'[role="listitem"]:last-child',
    sortOption:'.dropdown-pane > :nth-child(1) > .bg-slate-25',
    newLabel:"[data-testid='sidebar-new-label-button']",
    labelNameInput:"[data-testid='label-title'] > input",
    labelDescriptionInput:"[data-testid='label-description'] > input",
    labelCreateButton:"[data-testid='label-submit']"
}

let txtMessage;

class ConversationsPage {
   
   
    clickconversationIcon() {
        cy.get('a').contains('CONVERSATIONS').click({force: true} );

    }

    clickOnNewLabel(){
         // cy.get('.-ml-3').click()
         cy.get(locators.newLabel).click();
    }

    filllabelNameAndDescription(userlabelName,  userlabelDescription){
        cy.get(locators.labelNameInput).type(userlabelName);
        cy.get(locators.labelDescriptionInput).type(userlabelDescription)
    }

    clickCreateLabel(){
        cy.get(locators.labelCreateButton).click();
    }
    clickSortConversation(){
        cy.get(locators.sortConversation).click()
        cy.get('span').contains('Status').should('exist');

    }
    selectSortOption(option){
        cy.get(locators.sortOption).select(option).should('have.value',option)
    }

    clickAllIcon() {
        cy.get('.tabs > :nth-child(3) > a').click();
    }

    clickLastConversationUser() {
        cy.get(locators.lastPersonChat).click(); 
    }

    clickchatSectionAndTypingMessage(message) {

        txtMessage=message;
        cy.get(locators.chatSection).type(message);

    }

    clickOnSendMessage(){
        cy.get('span').contains('Send (⌘ + ↵)').click();

    }
    clickthree_dot(){
        cy.contains('li',txtMessage ).find('button[type="submit"]').click()
    }

    clickdeleteOption(){
        cy.get('p').contains('Delete').click()
    }

    clickfinalDelete(){
        cy.get(locators.finalDelete).click()
    }
}

export default  ConversationsPage;

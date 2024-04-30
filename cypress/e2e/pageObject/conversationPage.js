
const locators= {

    finalDelete :'button.button.action-button.smooth.alert',
    chatSection:'.ProseMirror.ProseMirror-woot-style'
}

let txtMessage;
class ConversationsPage {
   
   
    clickconversationIcon() {
        cy.contains('a', 'CONVERSATIONS').click();
    }

    clickAllIcon() {
        cy.xpath("//a[contains(.,'All')]").click();
    }

    clickFirstConversationUser() {
        cy.get('h4').contains('cold-leaf-235').click();
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

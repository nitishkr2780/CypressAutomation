
let txtMessage;
class ConversationsPage {
    get conversationIcon() {
        return cy.contains('a', 'CONVERSATIONS'); //here i cant find that's why i used
        
    }


    get conversationItems() {
        return cy.xpath("//div[@role='listitem']");
    }

    get firstConversationUser() {
        return cy.get('h4').contains('cold-leaf-235'); //cold-leaf-235 is a sender name
      
    }

    get chatSection() {
        return cy.get('.ProseMirror.ProseMirror-woot-style'); //nothing given other than this
    }

    get sendButton(){
        return cy.get('span').contains('Send (⌘ + ↵)'); 
        
    }

    get recentMessage(){
        return cy.get('p').contains(txtMessage);
    }

    get three_dot(){
       return cy.contains('li',txtMessage )
        .find('button[type="submit"]')
    }

    get deleteOption(){
       return cy.get('p').contains('Delete')
    }
    get finalDelete(){
       return cy.get('button.button.action-button.smooth.alert');

    }

    
   
    clickconversationIcon() {
        this.conversationIcon.click();
    }

    clickAllIcon() {
        cy.xpath("//a[contains(.,'All')]").click();
    }

    getConversationItemsCount() {
        return this.conversationItems.should('have.length', 3);
    }

    clickFirstConversationUser() {
        this.firstConversationUser.click();
    }

    clickchatSectionAndTypingMessage(mesege) {

        txtMessage=mesege;
        this.chatSection.type(mesege);

    }

    clickOnSendMessage(){
        this.sendButton.click();

    }
    clickthree_dot(){
        this.three_dot.click()
    }

    clickdeleteOption(){
        this.deleteOption.click()
    }

    clickfinalDelete(){
        this.finalDelete.click()
    }
}

export default  ConversationsPage;

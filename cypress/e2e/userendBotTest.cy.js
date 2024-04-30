describe('user end Bot access',()=>{
    
    
    it('iframe1',()=>{
          cy.visit("https://nitishkr2780.github.io/chatwootBot/")
          cy.wait(2000)
          cy.get("button[title='Open chat window']").click()

        // const iframe=cy.get('#chatwoot_live_chat_widget')
        //       .its('0.contentDocument.body')
        //       .should('be.visible')
        //       .then(cy.wrap);
        //       cy.get('.pr-2 text-sm').trigger('mouseover').click()
    })

})
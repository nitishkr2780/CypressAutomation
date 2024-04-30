
const locators={
    
    choosefileOption :'#file',

}

class  Fileclass{


    clickchoosefile(filename){
        cy.get(locators.choosefileOption).attachFile(filename);
    }

    clickOnupdateProfileOption(){
        cy.get('span').contains('Update Profile').click()
    }

}
export default Fileclass;
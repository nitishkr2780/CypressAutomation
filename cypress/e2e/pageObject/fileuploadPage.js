class  Fileclass{


    get choosefileOption(){
        return  cy.get('#file');
      }
  
      get updateProfileOption(){
          return cy.get('span').contains('Update Profile');
  
      }
      clickchoosefile(filename){
        this.choosefileOption.attachFile(filename);
    }

    clickOnupdateProfileOption(){
        this.updateProfileOption.click()
    }

}
export default Fileclass;
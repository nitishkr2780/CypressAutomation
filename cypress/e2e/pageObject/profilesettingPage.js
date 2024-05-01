
const locators={
    
    mainprofileSetting:'button[type="submit"]',
    onlineStatus:"//span[normalize-space()='Online']",
    profilesettingOption:'a span:contains("Profile Settings")',
    offlineBtn:'span.button__content.text-left.rtl\\:text-right',
    choosefileOption :'#file'
}

class ProfileSettingsPage {
   
    clickmainprofileSetting() {

        cy.get(locators.mainprofileSetting).click({ multiple: true });
    }

    verifyOnlineStatusVisibility() {
        cy.xpath(locators.onlineStatus).should('be.visible');
    }

    changeToOffline(){
        cy.get(locators.offlineBtn).contains('Offline').click();
    }
    changeToOnline(){
        cy.xpath(locators.onlineStatus).click()
    }

    changeToBusy(){
        cy.contains('span', 'Busy', { normalizeWhitespace: true }).click();
    }
    clickonProfileSetting(){
        cy.get(locators.profilesettingOption).click();
    }
    clickchoosefile(filename){

        cy.get(locators.choosefileOption).attachFile(filename)

        /* 2nd method 
        cy.get(locators.choosefileOption).as('fileInput');
        cy.fixture(filename).then(fileContent => {
            cy.get('@fileInput').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'filename',
            mimeType: 'image/png'
            });
        });
          
        */
         
        
    }

    clickOnupdateProfileOption(){
        cy.get('span').contains('Update Profile').click()
    }

}

export default  ProfileSettingsPage;

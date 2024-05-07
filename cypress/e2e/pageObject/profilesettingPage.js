
const locators={
    
    mainprofileSetting:'button[type="submit"]',
    onlineStatus:"//span[normalize-space()='Online']",
    profilesettingOption:'a span:contains("Profile Settings")',
    offlineBtn:'span.button__content.text-left.rtl\\:text-right',
    choosefileOption :'[class="relative rounded-xl h-[72px] w-[72px] cursor-pointe group"]> input[type="file"]',
    filePathFromDevice:'/home/nitish/Desktop/CypressAutomation/cypress/fixtures/profile.jpeg'
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
    clickchoosefile(){
        cy.get(locators.choosefileOption).as('fileInput');
        cy.get('@fileInput').selectFile(locators.filePathFromDevice,{ force: true })

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

    clickLogout(){
        cy.get('span').contains('Logout').click()
    }

    verifyLogout(){
        cy.url().should('contain','https://www.chatwoot.com/')
    }

}

export default  ProfileSettingsPage;


const locators={
    
    mainprofileSetting:'button[type="submit"]',
    onlineStatus:"//span[normalize-space()='Online']",
    profilesettingOption:'a span:contains("Profile Settings")'
}

class ProfileSettingsPage {
   
    clickmainprofileSetting() {

        cy.get(locators.mainprofileSetting).click({ multiple: true });
    }

    verifyOnlineStatusVisibility() {
        cy.xpath(locators.onlineStatus).should('be.visible');
    }
    clickonProfileSetting(){
        cy.get(locators.profilesettingOption).click();
    }

}

export default  ProfileSettingsPage;

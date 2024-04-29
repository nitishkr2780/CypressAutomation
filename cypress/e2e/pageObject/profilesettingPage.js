class ProfileSettingsPage {
    get mainprofileSetting() {
        return cy.get('button[type="submit"]');
    }

    get onlineStatus() {
        return cy.xpath("//span[normalize-space()='Online']");
    }

    get profilesettingOption(){

        return cy.get('a span:contains("Profile Settings")');

    }


    clickmainprofileSetting() {

        this.mainprofileSetting.click({ multiple: true });
    }

    verifyOnlineStatusVisibility() {
        this.onlineStatus.should('be.visible');
    }
    clickonProfileSetting(){
        this.profilesettingOption.click();
    }

    

}

export default  ProfileSettingsPage;

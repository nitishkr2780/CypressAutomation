
const locators={
    
    settingsLink:'[href="/app/accounts/96049/settings"]',
    submitButton:'[data-testid="submit_button"]'

}

class SettingsPage {
   
    clickSettingsLink() {
        cy.get(locators.settingsLink).click();
    }

    clickSubmitButton() {
        cy.get(locators.submitButton).click();
    }
}

export default  SettingsPage;

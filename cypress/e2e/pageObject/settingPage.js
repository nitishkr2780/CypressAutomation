class SettingsPage {
    get settingsLink() {
        return cy.get('[href="/app/accounts/96049/settings"]');
    }

    get submitButton() {
        return cy.get('[data-testid="submit_button"]');
    }

    clickSettingsLink() {
        this.settingsLink.click();
    }

    clickSubmitButton() {
        this.submitButton.click();
    }
}

export default  SettingsPage;

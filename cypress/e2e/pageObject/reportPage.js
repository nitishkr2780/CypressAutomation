
const locators={
    
    reportLink :'[href="/app/accounts/96049/reports"]',

}

class Report{

    clickreportLink() {
        cy.get(locators.reportLink).click();
    }
}
export default Report;
class Report{

 get reportLink() {
        return cy.get('[href="/app/accounts/96049/reports"]');
    }

    clickreportLink() {
        this.reportLink.click();
    }
}
export default Report;
class Logout{

    btnProfile="button[type='submit']";
    btnLogout="//span[normalize-space()='Logout']";

    clickProfile(){
        cy.get(this.btnProfile).click()

    }


    clickLogout(){
        cy.xpath(this.btnLogout).click();

    }
    
}
export default Logout;
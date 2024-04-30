
const locators={
    
    btnProfile:"button[type='submit']",
    btnLogout:"//span[normalize-space()='Logout']"
}

class Logout{
    clickProfile(){
        cy.get(locators.btnProfile).click()

    }

    clickLogout(){
        cy.xpath(locators.btnLogout).click();
    }
    
}
export default Logout;

import ContactsPage from "./pageObject/contactPage"
import ProfileSettingsPage from "./pageObject/profilesettingPage"
import SettingsPage from "./pageObject/settingPage"
import Report from "./pageObject/reportPage.js"
import ConversationsPage from "./pageObject/conversationPage.js"
let userdata;

describe('template spec', () => {

    before(()=>{
        cy.fixture("logindata").then((data)=>{
            userdata=data;
      })
    })
    
    beforeEach( () => {
        cy.login(userdata.username,userdata.password)

    })

    it('navigate to conversation', () => {
        cy.visit('/')
        const  conversationsPage = new ConversationsPage();

        conversationsPage.clickconversationIcon();
    })
    
    it('navigate to contacts',()=>
    {
        cy.visit('/')
        const contactsPage = new  ContactsPage();

        contactsPage.clickContactsLink();
        contactsPage.verifyContactsHeaderVisibility();
    })

    it('navigate to main profile setting',()=>{
        cy.visit('/')
        const profileSettingPage=  new ProfileSettingsPage();

        profileSettingPage.clickmainprofileSetting();
        profileSettingPage.verifyOnlineStatusVisibility();
        profileSettingPage.clickonProfileSetting();

    })

    it('navigate to  setting',()=>{
        cy.visit('/')

        const settingsPage = new SettingsPage();

        settingsPage.clickSettingsLink();
        settingsPage.clickSubmitButton();

    })

    it('navigate to  report',()=>{
        cy.visit('/')

        const report = new Report();
        
        report.clickreportLink();
    })
})
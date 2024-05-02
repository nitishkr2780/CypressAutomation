
import ContactsPage from "./pageObject/contactPage"
import ProfileSettingsPage from "./pageObject/profilesettingPage"
import SettingsPage from "./pageObject/settingPage"
import Report from "./pageObject/reportPage.js"
import ConversationsPage from "./pageObject/conversationPage.js"
let userdata;

const  conversationsPage = new ConversationsPage();
const contactsPage = new  ContactsPage();
const profileSettingPage=  new ProfileSettingsPage();
const settingsPage = new SettingsPage();
const report = new Report();


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
        conversationsPage.clickconversationIcon();
    })
    
    it('navigate to contacts',()=>
    {
        cy.visit('/')
        contactsPage.clickContactsLink();
        contactsPage.verifyContactsHeaderVisibility();
    })

    it('navigate to main profile setting',()=>{
        cy.visit('/')
        profileSettingPage.clickmainprofileSetting();
        profileSettingPage.verifyOnlineStatusVisibility();
        profileSettingPage.clickonProfileSetting();

    })

    it('navigate to  setting',()=>{
        cy.visit('/')
        settingsPage.clickSettingsLink();
        settingsPage.clickSubmitButton();

    })

    it('navigate to  report',()=>{
        cy.visit('/')
        report.clickreportLink();
    })
})
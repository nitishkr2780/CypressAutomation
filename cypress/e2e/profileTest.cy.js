import 'cypress-file-upload'
import ProfileSettingsPage from "./pageObject/profilesettingPage";

const profileSettingsPage= new  ProfileSettingsPage();

let userdata;

describe('Profile Test',()=>{
    before(()=>{
        cy.fixture("logindata").then((data)=>{
            userdata=data;
        })
    })
    
    beforeEach( () => {
        cy.login(userdata.username,userdata.password)

    })

    it('user switch to  online mode',()=>{
        cy.visit('/')
        profileSettingsPage.clickmainprofileSetting();
        profileSettingsPage.changeToOnline()
    })

    it('user change to  busy mode',()=>{
        cy.visit('/')
        profileSettingsPage.clickmainprofileSetting();
        profileSettingsPage.changeToBusy()

    })

    it('user change  to offline  mode',()=>{
        cy.visit('/')
        profileSettingsPage.clickmainprofileSetting();
        profileSettingsPage.changeToOffline()
    })

    it.only('upload profile picture',()=>{
        cy.visit('/')
        profileSettingsPage.clickmainprofileSetting();

        profileSettingsPage.verifyOnlineStatusVisibility();
        profileSettingsPage.clickonProfileSetting()

        profileSettingsPage.clickchoosefile('cp1.png')
        profileSettingsPage.clickOnupdateProfileOption()
    })
})
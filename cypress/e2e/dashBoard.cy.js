import 'cypress-file-upload'
import Fileclass from "./pageObject/fileuploadPage.js"
import ConversationsPage from "./pageObject/conversationPage.js";
import ProfileSettingsPage from './pageObject/profilesettingPage';
import ContactsPage from './pageObject/contactPage.js';
import {faker} from '@faker-js/faker'  

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


    it('send message from admin side', () => {
        cy.visit('/')
        const  conversationsPage = new ConversationsPage();

        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickFirstConversationUser();
        conversationsPage.clickchatSectionAndTypingMessage("the sun dipped");
        conversationsPage.clickOnSendMessage();
        conversationsPage.recentMessage.should('exist');
        conversationsPage.clickthree_dot();
        conversationsPage.clickdeleteOption();
        conversationsPage.clickfinalDelete();

    })
    


    it('upload profile picture',()=>{
        cy.visit('/')
        const profileSettingsPage= new  ProfileSettingsPage();

        const fileclass = new Fileclass();
        profileSettingsPage.clickmainprofileSetting();

        profileSettingsPage.verifyOnlineStatusVisibility();
        profileSettingsPage.clickonProfileSetting()
        fileclass.clickchoosefile('cp1.png')
        fileclass.clickOnupdateProfileOption()
    })

    it('verify contacts  of any user',()=>{

        cy.visit('/')
        const contactsPage = new  ContactsPage();
        contactsPage.clickContactsLink();
        contactsPage.verifyContactsHeaderVisibility();
        contactsPage.verifyContactofAnyUser()

    })

    it('create new contact',()=>{
        cy.visit('/')
        const contactsPage = new  ContactsPage();
        contactsPage.clickContactsLink();
        contactsPage.clickNewcontact()
        contactsPage.verifycreateNewContactTitle()
        contactsPage.fillName(faker.person.fullName())
        contactsPage.fillEmail(faker.internet.email())
        contactsPage.fillBio(faker.lorem.words(4))
        contactsPage.selectCountry()
        contactsPage.fillCity(faker.location.city())
        contactsPage.clickSubmit()
    })
})

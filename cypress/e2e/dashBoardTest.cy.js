import 'cypress-file-upload'
import Fileclass from "./pageObject/fileuploadPage.js"
import ConversationsPage from "./pageObject/conversationPage.js";
import ProfileSettingsPage from './pageObject/profilesettingPage.js';
import { faker } from '@faker-js/faker';

let userdata;
let userOption='all'
const  conversationsPage = new ConversationsPage();

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
        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickLastConversationUser();
        conversationsPage.clickchatSectionAndTypingMessage("the sun dipped");
        conversationsPage.clickOnSendMessage();
        conversationsPage.clickthree_dot();
        conversationsPage.clickdeleteOption();
        conversationsPage.clickfinalDelete();
    })

    it('sort conversation based on given Options',()=>{
        cy.visit('/');
        conversationsPage.clickSortConversation()
        conversationsPage.selectSortOption(userOption)
         
     })

     it('open add label modal and create a label', () => {
        cy.visit('/')
        conversationsPage.clickOnNewLabel()
        conversationsPage.filllabelNameAndDescription(faker.lorem.word(),faker.lorem.lines())
        // conversationsPage.clickCreateLabel() // after ftyping it automaticaly created
    });

    
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

    
})

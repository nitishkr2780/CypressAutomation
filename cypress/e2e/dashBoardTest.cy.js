import 'cypress-file-upload'
import ConversationsPage from "./pageObject/conversationPage.js";
import { faker } from '@faker-js/faker';

let userdata;
let userOption='all'
const  conversationsPage = new ConversationsPage();

let pname;

describe('Dashboard conversation  Tests', () => {

    before(()=>{
        cy.fixture("logindata").then((data)=>{
            userdata=data;
        })
    })
    
    beforeEach( () => {
        cy.login(userdata.username,userdata.password)

    })

    it('send message from admin side then delete that message', () => {
        cy.visit('/')
        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickLastConversationUser();
        conversationsPage.clickchatSectionAndTypingMessage(faker.lorem.words(4));
        conversationsPage.clickOnSendMessage();
        conversationsPage.clickthree_dot();
        conversationsPage.clickdeleteOption();
        conversationsPage.clickfinalDelete();
    })

    it('latest massage canned for future use ',()=>{

        cy.visit('/')
        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickLastConversationUser();
        conversationsPage.clickchatSectionAndTypingMessage(faker.lorem.words(4));
        conversationsPage.clickOnSendMessage();
        conversationsPage.clickthree_dot();
        conversationsPage.clickOnAddToCannedResponses(faker.lorem.word(3));
    })

    it('use canned message directly for fast reply and upload file/screenshot for refrences',()=>{
        cy.visit('/')
        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickLastConversationUser();
        conversationsPage.clickchatSectionAndTypingMessage('/');
        conversationsPage.selectRecentCannedMessage()
        conversationsPage.selectFileFromGallaryAndUploadInChat()
        conversationsPage.clickOnSendMessage();
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

    it('assigning label to any conversation',()=>{
        let currentUsername;
        cy.visit('/')
        conversationsPage.clickconversationIcon();
        conversationsPage.clickAllIcon();
        conversationsPage.clickLastConversationUser();
        conversationsPage.clickOnCurrentUser()
        conversationsPage.clickddLabel()
    })

    it('search any previous conversation by typing related message',()=>{

        cy.visit('/')
        conversationsPage.clickconversationIcon();
        conversationsPage.clickOnSearchConversation()
        conversationsPage.typeAndSearchAnything(faker.lorem.word(3))
    })

})

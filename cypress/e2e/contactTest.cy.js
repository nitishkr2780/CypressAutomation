import 'cypress-file-upload'

import ContactsPage from './pageObject/contactPage.js';
import {faker} from '@faker-js/faker'  
import Fileclass from './pageObject/fileuploadPage.js';

let userdata;
const contactsPage = new  ContactsPage();

describe('contacts test',()=>{

    before(()=>{
        cy.fixture("logindata").then((data)=>{
            userdata=data;
        })
    })
    
    beforeEach( () => {
        cy.login(userdata.username,userdata.password)
    })


    it('create new contact',()=>{
        cy.visit('/')
        contactsPage.clickContactsLink();
        contactsPage.clickNewcontact()
        contactsPage.verifycreateNewContactTitle()
        contactsPage.fillName(faker.person.fullName())
        contactsPage.fillEmail(faker.internet.email())
        contactsPage.fillBio(faker.lorem.words(4))
        contactsPage.selectCountryCode()
        contactsPage.fillMobileNo(faker.string.numeric('##########'))
        contactsPage.fillCompanyName(faker.company.name())
        contactsPage.selectCountry()
        contactsPage.fillCity(faker.location.city())
        contactsPage.clickSubmitAndVerify()
    })

    it('edit latest contact',()=>{
        cy.visit('/')
        contactsPage.clickContactsLink();
        contactsPage.selectLastPerson()
        contactsPage.clickEditContacts()

        const fileclass = new Fileclass();

        // fileclass.clickchoosefile('cp1.png')     //if  new profile we have to  upload then enable
        contactsPage.fillEmail(faker.internet.email())
        contactsPage.fillBio(faker.lorem.words(4))
        contactsPage.fillMobileNo(faker.string.numeric('##########'))
        contactsPage.fillCompanyName(faker.company.name())
        contactsPage.selectCountry()
        contactsPage.fillCity(faker.location.city())
        contactsPage.clickSubmitAndVerify()
        

    })

    it('add a note to latest contact',()=>{
        cy.visit('/')
        contactsPage.clickContactsLink();
        contactsPage.selectLastPerson()
        contactsPage.addNoteAndSubmit(faker.lorem.lines())
    })



    it('delete contact of latest person',()=>{
       cy.visit('/')
       contactsPage.clickContactsLink();
       contactsPage.selectLastPerson()
       contactsPage.clickOnDeleteAndCnfirmDelete()
       contactsPage.verifyContactDeleted()
    })

})
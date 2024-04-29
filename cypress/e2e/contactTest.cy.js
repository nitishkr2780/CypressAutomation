import 'cypress-file-upload'

import ContactsPage from './pageObject/contactPage.js';
import {faker} from '@faker-js/faker'  
import Fileclass from './pageObject/fileuploadPage.js';

let userdata;
let personName="neha thakur";
let personToDel="Bryant Botsford";
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
        contactsPage.clickSubmit()
    })

    it('edit any contact',()=>{
        cy.visit('/')
        contactsPage.clickContactsLink();
        cy.get('a').contains(personName).click()
        contactsPage.clickEditContacts()

        const fileclass = new Fileclass();

        // fileclass.clickchoosefile('cp1.png')     //if  new profile we have to  upload then enable
        contactsPage.fillEmail(faker.internet.email())
        contactsPage.fillBio(faker.lorem.words(4))
        contactsPage.fillMobileNo(faker.string.numeric('##########'))
        contactsPage.fillCompanyName(faker.company.name())
        contactsPage.selectCountry()
        contactsPage.fillCity(faker.location.city())
        contactsPage.clickSubmit()
        cy.contains('Contact saved successfully')

    })

    it('add a note to any contact',()=>{
        cy.visit('/')
        contactsPage.clickContactsLink();
        contactsPage.clickOnPersonNametoEdit(personName)
        contactsPage.addNoteAndSubmit(faker.lorem.lines())
    })

    it.only('delete contact of any person',()=>{
       cy.visit('/')
       contactsPage.clickContactsLink();
       contactsPage.clickOnPersonNametoEdit(personToDel)
       contactsPage.clickOnDeleteAndCnfirmDelete()
       contactsPage.verifyContactDeleted()
    })


})
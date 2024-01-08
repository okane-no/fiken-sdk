import { afterAll, assert, assertType, beforeAll, describe, expect, it } from 'vitest'
import { ContactsService, OpenAPI, contact, contactPerson } from '../src/index'
import 'dotenv/config'

const testContactName = "TEST"


const getTestContact = async (companySlug: string) => {

    const response = await ContactsService.getContacts(companySlug)

    const testContact = response.find(contact => contact.name === testContactName)

    if (testContact) {
        testContact.phoneNumber = '12345678'
        await ContactsService.updateContact(companySlug, testContact.contactId!, testContact)
        return testContact
    } else {
        let testContact: contact = {
            name: testContactName,
            address: {
                country: 'Norway',
                city: 'Oslo',
                postCode: '0162',
                streetAddress: 'Karl Johans gate 41A'
            },
            phoneNumber: '23905020',
            contactPerson: [
                {
                    name: "Ola Nordmann",
                    email: "ola.nordmann@fiken.no",
                    address: {
                        country: 'Norway',
                        city: 'Oslo',
                        postCode: '0162',
                        streetAddress: 'Karl Johans gate 41A'
                    },
                    phoneNumber: '12345678'
                }
            ]
        }
        const response = await ContactsService.createContact(companySlug, testContact)

        console.log(response)

        return testContact
    }
}

describe('Contacts Service', () => {

    let companySlug: string
    let testContact: contact

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!

        testContact = await getTestContact(companySlug)
    })

    it('Retrieves all contacts for the specified company', async () => {
        // Arrange

        // Act
        const response = await ContactsService.getContacts(companySlug)

        // Assert
        response.forEach(contact => {
            assertType<contact>(contact)
        })
    })

    it('Creates a new contact', async () => {
        // Arrange

        // Act
        const createdContact = await ContactsService.createContact(companySlug, { ...testContact, ...{ name: testContact.name + '-' + Date.now() } })

        // Assert
        assertType<string>(createdContact)
    })

    it('Retrieves specified contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await ContactsService.getContact(companySlug, testContact.contactId)

        // Assert
        assertType<contact>(response)
    })

    it('Updates an existing contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await ContactsService.updateContact(companySlug, testContact.contactId, { ...testContact, ...{ phoneNumber: '87654321' } })
        const updatedContact = await ContactsService.getContact(companySlug, testContact.contactId)

        // Assert
        expect(testContact.phoneNumber).not.be.equal(updatedContact.phoneNumber)
    })

    it('Creates and adds a new attachment/document to a contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        let blob = new Blob(['hello world'])
        let formData = {
            filename: 'test.txt',
            comment: undefined,
            file: blob
        }

        // Act
        const response = await ContactsService.addAttachmentToContact(companySlug, testContact.contactId, formData)

        // Assert
        assertType<string>(response)
    })

    it('Retrieves contact person(s) for a specified contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await ContactsService.getContactContactPerson(companySlug, testContact.contactId)

        // Assert
        response.forEach(contactPerson => {
            assertType<contactPerson>(contactPerson)
        })
    })

    it('Adds a new contact person to a contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        let testContactPerson: contactPerson = {
            name: "Ola Nordmann",
            email: "ola.nordmann@fiken.no",
            address: {
                country: 'Norway',
                city: 'Oslo',
                postCode: '0162',
                streetAddress: 'Karl Johans gate 41A'
            },
            phoneNumber: '12345678'
        }

        // Act
        const response = await ContactsService.addContactPersonToContact(companySlug, testContact.contactId, testContactPerson)

        // Assert
        assertType<string>(response)
    })

    it('Retrieves specified contact person', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await ContactsService.getContactContactPerson(companySlug, testContact.contactId)

        // Assert
        response.forEach(contact => {
            assertType<contactPerson>(contact)
        })
    })

    it('Updates an existing contact person', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        const contactPersons = await ContactsService.getContactContactPerson(companySlug, testContact.contactId)
        let contactPerson = contactPersons[0]

        // Act
        const response = await ContactsService.updateContactContactPerson(companySlug, testContact.contactId, contactPerson.contactPersonId!, { ...contactPerson, ...{ phoneNumber: '4444444' } })

        // Assert
        assertType<string>(response)
    })

    it(`Delete a contact's contact person.`, async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        const contactPersons = await ContactsService.getContactContactPerson(companySlug, testContact.contactId)
        let contactPerson = contactPersons[0]

        // Act
        const response = await ContactsService.deleteContactContactPerson(companySlug, testContact.contactId!, contactPerson.contactPersonId!)

        // Assert
    })
})
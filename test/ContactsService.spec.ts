import { assertType, beforeAll, describe, expect, it } from 'vitest'
import {  contact, contactPerson, FikenClient } from '../src/index'
import 'dotenv/config'

const testContactName = "TEST"

const getTestContact = async (client: FikenClient, companySlug: string) => {

    const response = await client.contacts.getContacts({ companySlug })

    const testContact = response.find(contact => contact.name === testContactName)

    if (testContact) {
        testContact.phoneNumber = '12345678'
        await client.contacts.updateContact({ companySlug: companySlug, contactId: testContact.contactId!, requestBody: testContact })
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
        const response = await client.contacts.createContact({ companySlug: companySlug, requestBody: testContact })

        console.log(response)

        return testContact
    }
}

describe('Contacts Service', () => {

    let companySlug: string
    let testContact: contact

    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })

        testContact = await getTestContact(client, companySlug)
    })

    it('Retrieves all contacts for the specified company', async () => {
        // Arrange

        // Act
        const response = await client.contacts.getContacts({ companySlug })

        // Assert
        response.forEach(contact => {
            assertType<contact>(contact)
        })
    })

    it('Creates a new contact', async () => {
        // Arrange

        // Act
        const createdContact = await client.contacts.createContact({ companySlug: companySlug, requestBody: { ...testContact, ...{ name: testContact.name + '-' + Date.now() } } })

        // Assert
        assertType<string>(createdContact)
    })

    it('Retrieves specified contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await client.contacts.getContact({ companySlug: companySlug, contactId: testContact.contactId })

        // Assert
        assertType<contact>(response)
    })

    it('Updates an existing contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await client.contacts.updateContact({ companySlug, contactId: testContact.contactId, requestBody: { ...testContact, ...{ phoneNumber: '87654321' } } })
        const updatedContact = await client.contacts.getContact({ companySlug, contactId: testContact.contactId })

        // Assert
        expect(testContact.phoneNumber).not.be.equal(updatedContact.phoneNumber)
    })

    it('Creates and adds a new attachment/document to a contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        let blob = new Blob(["test"], {type: 'text/plain'})
        let formData = {
            filename: 'test.txt',
            comment: undefined,
            file: blob
        }

        // Act
        const response = await client.contacts.addAttachmentToContact({ companySlug, contactId: testContact.contactId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Retrieves contact person(s) for a specified contact', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await client.contacts.getContactContactPerson({ companySlug, contactId: testContact.contactId })

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
        const response = await client.contacts.addContactPersonToContact({ companySlug, contactId: testContact.contactId, requestBody: testContactPerson })

        // Assert
        assertType<string>(response)
    })

    it('Retrieves specified contact person', async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        // Act
        const response = await client.contacts.getContactContactPerson({ companySlug, contactId: testContact.contactId })

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

        const contactPersons = await client.contacts.getContactContactPerson({ companySlug, contactId: testContact.contactId })
        let contactPerson = contactPersons[0]

        // Act
        const response = await client.contacts.updateContactContactPerson({ companySlug, contactId: testContact.contactId, contactPersonId: contactPerson.contactPersonId!, requestBody: { ...contactPerson, ...{ phoneNumber: '4444444' } } })

        // Assert
        assertType<string>(response)
    })

    it(`Delete a contact's contact person.`, async () => {
        // Arrange
        if (!testContact.contactId) {
            throw Error('contactId can not be undefined')
        }

        const contactPersons = await client.contacts.getContactContactPerson({ companySlug, contactId: testContact.contactId })
        let contactPerson = contactPersons[0]

        // Act
        const response = await await client.contacts.deleteContactContactPerson({ companySlug, contactId: testContact.contactId!, contactPersonId: contactPerson.contactPersonId! })

        // Assert
    })
})
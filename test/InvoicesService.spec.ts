import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, invoiceLineRequest, invoiceRequest, invoiceResult } from '../src/index'
import 'dotenv/config'

describe('Invoices Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all invoices for given company', async () => {
        // Arrange

        // Act
        const response = await client.invoices.getInvoices({ companySlug })

        // Assert
        assertType<invoiceResult[]>(response)
    })

    it('Creates an invoice', async () => {
        // Arrange
        const bankAccount = (await client.bankAccounts.getBankAccounts({ companySlug }))[0]
        if (!bankAccount.accountCode) {
            throw Error('Could not retrieve bank account account code')
        }

        const customers = await client.contacts.getContacts({ companySlug })
        let customer = customers.find(contact => contact.customer === true)
        if (!customer) {
            throw Error('Could not find any contacts with customer is true')
        }
        if(!customer.contactId) {
            throw Error('Customer does not have contact ID')
        }

        const invoiceLineRequest: invoiceLineRequest = {
            quantity: 1,
            description: 'test',
            vatType: 'NONE',
            unitPrice: 100,
            incomeAccount:  '3000'
        }

        const requestBody: invoiceRequest = {
            bankAccountCode: bankAccount.accountCode,
            cash: false,
            customerId: customer.contactId,
            dueDate: "2999-01-01",
            issueDate: "2024-01-01",
            lines: [invoiceLineRequest]
        }

        // Act
        const response = await client.invoices.createInvoice({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns invoice with specified id', async () => {
        // Arrange
        const invoices = await client.invoices.getInvoices({ companySlug })
        let invoice = invoices[0]
        let invoiceId = invoice.invoiceId
        if(!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        // Act
        const response = await client.invoices.getInvoice({ companySlug, invoiceId })

        // Assert
        assertType<invoiceResult>(response)
    })

})
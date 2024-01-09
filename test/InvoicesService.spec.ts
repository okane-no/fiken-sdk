import { assertType, beforeAll, describe, it } from 'vitest'
import { attachment, contact, counter, FikenClient, invoiceishDraftRequest, invoiceishDraftResult, invoiceLineRequest, invoiceRequest, invoiceResult, sendInvoiceishRequest, sendInvoiceRequest, updateInvoiceRequest } from '../src/index'
import 'dotenv/config'
import { testContactName } from './constants'

const getInvoiceDraft = async (client: FikenClient, companySlug: string) => {
    let draftId: number

    const customers: contact[] = await client.contacts.getContacts({ companySlug })
    let customer = customers.find(customer => customer.name === testContactName)
    if (!customer) {
        throw Error('Could not find customer: ' + testContactName)
    }
    if (!customer.contactId) {
        throw Error('contact does not have contact ID')
    }
    let bankAccounts = await client.bankAccounts.getBankAccounts({ companySlug })
    let bankAccount = bankAccounts.find(bankAccount => bankAccount.inactive === false)
    if(!bankAccount){
        throw Error("could not find any active bankAccounts")
    }
    if (!bankAccount.bankAccountNumber) {
        throw Error('bankAccount does not have bankAccountNumber')
    }
    const requestBody: invoiceishDraftRequest = {
        type: invoiceishDraftRequest.type.INVOICE,
        daysUntilDueDate: 60,
        customerId: customer.contactId,
        lines: [
            { quantity: 1, description: "TEST", incomeAccount: '3220', vatType: 'NONE', unitPrice: 100 }
        ],
        bankAccountNumber: bankAccount.bankAccountNumber,
        bic: bankAccount.bic,
        iban: bankAccount.iban
    }
    const response = await client.invoices.createInvoiceDraft({ companySlug, requestBody })
    const responseParts = response.split('/')
    draftId = Number(responseParts[responseParts.length - 1])

    return draftId
}

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
        let customer = customers.find(contact => contact.name === testContactName)
        if (!customer) {
            throw Error('Could not find any contacts with customer is true')
        }
        if (!customer.contactId) {
            throw Error('Customer does not have contact ID')
        }

        const invoiceLineRequest: invoiceLineRequest = {
            quantity: 1,
            description: 'test',
            vatType: 'NONE',
            unitPrice: 100,
            incomeAccount: '3000'
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
        if (!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        // Act
        const response = await client.invoices.getInvoice({ companySlug, invoiceId })

        // Assert
        assertType<invoiceResult>(response)
    })

    it('Updates invoice with provided id', async () => {
        // Arrange
        const invoices = await client.invoices.getInvoices({ companySlug })
        let invoice = invoices[0]
        let invoiceId = invoice.invoiceId
        if (!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        let requestBody: updateInvoiceRequest = {
            sentManually: true
        }

        // Act
        const response = await client.invoices.updateInvoice({ companySlug, invoiceId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns all attachments for a given Invoice', async () => {
        // Arrange
        const invoices = await client.invoices.getInvoices({ companySlug })
        let invoice = invoices[0]
        let invoiceId = invoice.invoiceId
        if (!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        // Act
        const response = await client.invoices.getInvoiceAttachments({ companySlug, invoiceId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to an Invoice', async () => {
        // Arrange
        const invoices = await client.invoices.getInvoices({ companySlug })
        let invoice = invoices[0]
        let invoiceId = invoice.invoiceId
        if (!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        let blob = new Blob(['Hello world'])
        let formData = {
            filename: 'test.txt',
            file: blob
        }

        // Act
        const response = await client.invoices.addAttachmentToInvoice({ companySlug, invoiceId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Sends the specified document', async () => {
        // Arrange
        const invoices = await client.invoices.getInvoices({ companySlug })
        let invoice = invoices[0]
        let invoiceId = invoice.invoiceId
        if (!invoiceId) {
            throw Error("Invoice does not have ID")
        }

        let requestBody: sendInvoiceRequest = {
            includeDocumentAttachments: false,
            invoiceId,
            method: ['email'],
            emailSendOption: sendInvoiceishRequest.emailSendOption.AUTO,
            message: 'TEST',
            recipientEmail: 'marensius.pettersen@gmail.com'
        }

        // Act
        const response = await client.invoices.sendInvoice({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Retrieves the counter for invoices if it has been created', async () => {
        // Arrange

        // Act
        const response = await client.invoices.getInvoiceCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    // TODO: Research what HTML contentType API wants
    it.skip('Creates the first invoice number which is then increased by one with every new invoice', async () => {
        // Arrange

        // Act
        const response = await client.invoices.createInvoiceCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    it('Returns all invoice drafts for given company', async () => {
        // Arrange

        // Act
        const response = await client.invoices.getInvoiceDrafts({ companySlug })

        // Assert
        assertType<invoiceishDraftResult[]>(response)
    })

    it('Creates an invoice draft', async () => {
        // Arrange
        const customers = await client.contacts.getContacts({ companySlug })
        let customer = customers.find(customer => customer.name === testContactName)
        if (!customer?.contactId) {
            throw Error('Customer does not have contact ID')
        }

        const requestBody: invoiceishDraftRequest = {
            customerId: customer.contactId,
            daysUntilDueDate: 30,
            type: invoiceishDraftRequest.type.INVOICE,
            lines: [
                { quantity: 0, description: "TEST", incomeAccount: '3000', vatType: 'NONE', unitPrice: 100 }
            ]
        }

        // Act
        const response = await client.invoices.createInvoiceDraft({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns invoice draft with specified id', async () => {
        // Arrange
        let draftId = await getInvoiceDraft(client, companySlug)

        // Act
        const response = await client.invoices.getInvoiceDraft({ companySlug, draftId })

        // Assert
        assertType<invoiceishDraftResult>(response)
    })

    it('Updates invoice draft with provided id', async () => {
        // Arrange
        let draftId = await getInvoiceDraft(client, companySlug)
        let invoiceDraft = await client.invoices.getInvoiceDraft({ companySlug, draftId })

        if (!invoiceDraft.customers) {
            throw Error('invoiceDraft does not have any customers')
        }
        let customer = invoiceDraft.customers[0]
        if (!customer.contactId) {
            throw Error('customer does not have contact ID')
        }
        let customerId = customer.contactId

        let requestBody = { ...invoiceDraft, ...{ type: invoiceishDraftRequest.type.INVOICE, customerId: customerId, daysUntilDueDate: 90 } }

        // Act
        const response = await client.invoices.updateInvoiceDraft({ companySlug, draftId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete invoice draft with specified id', async () => {
        // Arrange
        let draftId = await getInvoiceDraft(client, companySlug)

        // Act
        const response = await client.invoices.deleteInvoiceDraft({ companySlug, draftId })

        // Assert
    })

    it('Returns all attachments for specified draft', async () => {
        // Arrange
        let draftId = await getInvoiceDraft(client, companySlug)

        // Act
        const response = await client.invoices.getInvoiceDraftAttachments({ companySlug, draftId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to an invoice draft', async () => {
        // Arrange
        let draftId = await getInvoiceDraft(client, companySlug)

        let blob = new Blob(['Hello World'])
        let formData = {
            filename: 'test.txt',
            file: blob
        }

        // Act
        const response = await client.invoices.addAttachmentToInvoiceDraft({ companySlug, draftId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Creates an invoice from an already created draft', async () => {
        // Arrange
        let draftId: number = await getInvoiceDraft(client, companySlug)

        // Act
        const response = await client.invoices.createInvoiceFromDraft({ companySlug, draftId })

        // Assert
        assertType<string>(response)
    })

})
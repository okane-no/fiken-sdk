import { afterEach, assertType, beforeAll, beforeEach, describe, it } from 'vitest'
import { attachment, contact, counter, creditNoteResult, draftId, FikenClient, fullCreditNoteRequest, invoiceishDraftRequest, invoiceishDraftResult, invoiceResult } from '../src/index'
import 'dotenv/config'
import { testContactName } from './constants'
import { TestUtils } from './utils'

describe('Credit Notes Service', () => {

    let companySlug: string
    let client: FikenClient
    let invoice: invoiceResult
    let creditNote: creditNoteResult
    let creditNoteDraft: invoiceishDraftResult
    let testCustomer: contact

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    beforeEach(async () => {
        invoice = await TestUtils.createTestInvoice(client, companySlug)
        if (!invoice.invoiceId) {
            throw Error('invoice does not have invoiceId')
        }
        creditNote = await TestUtils.createTestCreditNote(client, companySlug, invoice.invoiceId)
        testCustomer = await TestUtils.getTestCustomer(client, companySlug)
        if (!testCustomer.contactId) {
            throw Error('testCustomer is missing contactId')
        }
        creditNoteDraft = await TestUtils.createTestCreditNoteDraft(client, companySlug, testCustomer.contactId)
    })

    afterEach(async () => {
        //TODO: Clean up Invoice
        //TODO: Clean up CreditNote
        // Clean up CreditNoteDraft
        if (creditNoteDraft) {
            TestUtils.deleteTestCreditNoteDraft(client, companySlug, creditNoteDraft)
        }
    })

    it('Returns all credit notes for given company', async () => {
        // Arrange

        // Act
        const response = await client.creditNotes.getCreditNotes({ companySlug })

        // Assert
        assertType<creditNoteResult[]>(response)
    })

    it('Returns offer with specified id', async () => {
        // Arrange
        if (!creditNote.creditNoteId) {
            throw Error('credit note does not have ID')
        }
        let creditNoteId = creditNote.creditNoteId.toString()

        // Act
        const response = await client.creditNotes.getCreditNote({ companySlug, creditNoteId })

        // Assert
        assertType<creditNoteResult>(response)
    })

    it('Retrieves the counter for offers if it has been created', async () => {
        // Arrange

        // Act
        const response = await client.creditNotes.getCreditNoteCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    it.skip('Creates the first offer number which is then increased by one with every new offer', async () => {
        // Arrange

        // Act
        const response = await client.creditNotes.createCreditNoteCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    it('Returns all offer drafts for given company', async () => {
        // Arrange

        // Act
        const response = await client.creditNotes.getCreditNoteDrafts({ companySlug })

        // Assert
        assertType<invoiceishDraftResult[]>(response)
    })

    it('Creates an offer draft', async () => {
        // Arrange
        const requestBody: invoiceishDraftRequest = {
            type: invoiceishDraftRequest.type.CREDIT_NOTE,
            daysUntilDueDate: 90,
            customerId: testCustomer.contactId!,
            lines: creditNote.lines?.map(line => ({ ...line, ...{ quantity: 1 } }))
        }

        // Act
        const response = await client.creditNotes.createCreditNoteDraft({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns offer draft with specified id', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        // Act
        const response = await client.creditNotes.getCreditNoteDraft({ companySlug, draftId })

        // Assert
        assertType<invoiceishDraftResult>(response)
    })

    it('Updates offer draft with provided id', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        if (!creditNoteDraft.customers) {
            throw Error('credit note draft is missing customers')
        }
        let customer = creditNoteDraft.customers[0]
        if (!customer.contactId) {
            throw Error('customer does not have contact ID')
        }
        let contactId = customer.contactId

        let requestBody: invoiceishDraftRequest = {
            ...creditNoteDraft,
            ...{
                customerId: contactId,
                type: invoiceishDraftRequest.type.INVOICE,
                daysUntilDueDate: 90
            }
        }

        // Act
        const response = await client.creditNotes.updateCreditNoteDraft({ companySlug, draftId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete offer draft with specified id', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        // Act
        const response = await client.creditNotes.deleteCreditNoteDraft({ companySlug, draftId })

        // Assert
    })

    it('Returns all attachments for specified draft', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        // Act
        const response = await client.creditNotes.getCreditNoteDraftAttachments({ companySlug, draftId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to a credit note draft', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        let formData: {
            filename?: string | undefined;
            comment?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(['Hello world'])
        }

        // Act
        const response = await client.creditNotes.addAttachmentToCreditNoteDraft({ companySlug, draftId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Creates a credit note from an already created draft', async () => {
        // Arrange
        if (!creditNoteDraft.draftId) {
            throw Error('creditNoteDraft is missing draftId')
        }
        let draftId = creditNoteDraft.draftId

        // Act
        const response = await client.creditNotes.createCreditNoteFromDraft({ companySlug, draftId })

        // Assert
        assertType<string>(response)
    })

})
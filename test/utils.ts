import { bankAccountResult, contact, creditNoteResult, FikenClient, fullCreditNoteRequest, invoiceishDraftRequest, invoiceishDraftResult, invoiceRequest } from "../src"
import { testContactName } from "./constants"

export class TestUtils {

    static createTestInvoice = async (client: FikenClient, companySlug: string) => {
        let bankAccounts: bankAccountResult[] = await client.bankAccounts.getBankAccounts({ companySlug })
        let bankAccount: bankAccountResult | undefined = bankAccounts.find(bankAccount => bankAccount.inactive === false)
        if (!bankAccount) {
            throw Error('Could not find a active bankAccount')
        }
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }

        let customer = await this.getTestCustomer(client, companySlug)
        if (!customer.contactId) {
            throw Error('customer does not have contactId')
        }

        let requestBody: invoiceRequest = {
            bankAccountCode: bankAccount.accountCode,
            cash: false,
            customerId: customer.contactId,
            dueDate: "2099-01-01",
            issueDate: "2024-01-01",
            lines: [
                {
                    description: 'TEST',
                    quantity: 1,
                    unitPrice: 1,
                    vatType: 'NONE',
                    incomeAccount: '3220'
                }
            ]
        }
        let invoiceFullUrl = await client.invoices.createInvoice({ companySlug, requestBody })
        return await client.invoices.getInvoice({ companySlug, invoiceId: Number(this.parseFullUrl(invoiceFullUrl)) })
    }

    static createTestCreditNote = async (client: FikenClient, companySlug: string, invoiceId: number): Promise<creditNoteResult> => {
        let creditNoteRequestBody: fullCreditNoteRequest = {
            invoiceId: invoiceId,
            issueDate: new Date().toISOString().split('T')[0],
            creditNoteText: 'TEST'
        }
        let creditNoteFullUrl = await client.creditNotes.createFullCreditNote({ companySlug, requestBody: creditNoteRequestBody })
        let creditNoteId = this.parseFullUrl(creditNoteFullUrl)
        return await client.creditNotes.getCreditNote({ companySlug, creditNoteId })
    }

    static createTestCreditNoteDraft = async (client: FikenClient, companySlug: string, customerId: number) => {
        const creditNoteDraftRequestBody: invoiceishDraftRequest = {
            type: invoiceishDraftRequest.type.CREDIT_NOTE,
            daysUntilDueDate: 90,
            customerId: customerId,
            lines: [
                {
                    quantity: 1,
                    description: 'TEST',
                    incomeAccount: '3220',
                    unitPrice: 1,
                    vatType: 'NONE',
                }
            ]
        }
        let creditNoteDraftFullUrl = await client.creditNotes.createCreditNoteDraft({ companySlug, requestBody: creditNoteDraftRequestBody })
        let creditNoteDraftId = this.parseFullUrl(creditNoteDraftFullUrl)
        return await client.creditNotes.getCreditNoteDraft({ companySlug, draftId: Number(creditNoteDraftId) })
    }

    static deleteTestCreditNoteDraft = async (client: FikenClient, companySlug: string, creditNoteDraft: invoiceishDraftResult) => {
        if (creditNoteDraft.draftId) {
            client.creditNotes.deleteCreditNoteDraft({ companySlug, draftId: creditNoteDraft.draftId })
        }
    }

    static getTestCustomer = (client: FikenClient, companySlug: string) => this.getContactByName(client, companySlug, testContactName)

    static getContactByName = async (client: FikenClient, companySlug: string, name: string): Promise<contact> => {
        const customers = await client.contacts.getContacts({ companySlug })
        let customer = customers.find(customer => customer.name === name)
        if (!customer) {
            throw Error('Could not find test customer')
        }
        return customer
    }

    static parseFullUrl = (resourceFullUrl: string): string => {
        let resourceFullUrlParts = resourceFullUrl.split('/')
        let resourceId = resourceFullUrlParts[resourceFullUrlParts.length - 1]
        return resourceId
    }

    static createTestOffer = async (client: FikenClient, companySlug: string) => {
        let customer = await this.getTestCustomer(client, companySlug)
        if(!customer.contactId){
            throw Error('customer does not have contactId')
        }

        let requestBody: invoiceishDraftRequest = {
            customerId: customer.contactId,
            daysUntilDueDate: 90,
            type: invoiceishDraftRequest.type.OFFER,
            lines: [
                {
                    quantity: 1,
                    description: 'TEST',
                    incomeAccount: '3220',
                    unitPrice: 1,
                    vatType: 'NONE'
                }
            ]
        }

        let offerFullUrl = await client.offers.createOfferDraft({ companySlug, requestBody })
        return await client.offers.getOffer({companySlug, offerId: this.parseFullUrl(offerFullUrl)})
    }
}


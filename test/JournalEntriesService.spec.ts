import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, journalEntry, generalJournalEntryRequest, attachment, bankAccountResult } from '../src/index'
import 'dotenv/config'

describe('Journal Entries Service', () => {

    const testJournalEntryDescription = "fiken-sdk test"
    const generalJournalEntryRequestDescription = "TEST Purchase"

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all general journal entries for the specified company', async () => {
        // Arrange

        // Act
        const response = await client.journalEntries.getJournalEntries({ companySlug })

        // Assert
        assertType<journalEntry[]>(response)
    })

    it('Creates a new general journal entry', async () => {
        // Arrange
        const bankAccounts: bankAccountResult[] = await client.bankAccounts.getBankAccounts({companySlug})
        let bankAccount = bankAccounts.filter(bankAccount => bankAccount.type === bankAccountResult.type.NORMAL)[0]

        const journalEntry: journalEntry = {
            date: "2024-01-01",
            description: testJournalEntryDescription,
            transactionId: 0,
            lines: [
                {
                    amount: 100,
                    debitAccount: '2380',
                    debitVatCode: 0,
                    creditAccount: '1579',
                    creditVatCode: 0
                }
            ]
        }

        const requestBody: generalJournalEntryRequest = {
            description: generalJournalEntryRequestDescription,
            journalEntries: [journalEntry],
            open: true
        }

        // Act
        const response = await client.journalEntries.createGeneralJournalEntry({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it(`Returns all journal entries within a given company's Journal Entry Service`, async () => {
        // Arrange
        const journalEntries = await client.journalEntries.getJournalEntries({ companySlug })
        let journalEntry = journalEntries.find(journal => journal.description = testJournalEntryDescription)
        let journalEntryId = journalEntry?.journalEntryId
        if(!journalEntryId){
            throw Error('Journal Entry does not have an ID')
        }

        // Act
        const response = await client.journalEntries.getJournalEntry({ companySlug, journalEntryId})

        // Assert
        assertType<journalEntry>(response)
    })

    it(`Creates and adds a new attachment to a Journal Entry`, async () => {
        // Arrange
        const journalEntries = await client.journalEntries.getJournalEntries({ companySlug })
        let journalEntry = journalEntries.find(journal => journal.description = testJournalEntryDescription)
        let journalEntryId = journalEntry?.journalEntryId
        if(!journalEntryId){
            throw Error('Journal Entry does not have an ID')
        }

        let blob = new Blob(['hello world'])
        let formData = {
            filename: 'test.PDF',
            comment: undefined,
            file: blob
        }

        // Act
        const response = await client.journalEntries.addAttachmentToJournalEntry({ companySlug, journalEntryId, formData})

        // Assert
        assertType<string>(response)
    })

    it(`Returns all attachments for a given Journal Entry`, async () => {
        // Arrange
        const journalEntries = await client.journalEntries.getJournalEntries({ companySlug })
        let journalEntry = journalEntries.find(journal => journal.description = testJournalEntryDescription)
        let journalEntryId = journalEntry?.journalEntryId
        if(!journalEntryId){
            throw Error('Journal Entry does not have an ID')
        }

        // Act
        const response = await client.journalEntries.getJournalEntryAttachments({ companySlug, journalEntryId})

        // Assert
        assertType<attachment[]>(response)
    })
})
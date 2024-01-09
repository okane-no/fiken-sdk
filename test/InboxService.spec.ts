import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, inboxResult } from '../src/index'
import 'dotenv/config'
import { TestUtils } from './utils'

describe('Inbox Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns the contents of the inbox for given company', async () => {
        // Arrange

        // Act
        const response = await client.inbox.getInbox({ companySlug })

        // Assert
        assertType<inboxResult[]>(response)
    })

    it('Upload a document to the inbox', async () => {
        // Arrange
        let formData: {
            name?: string | undefined;
            filename?: string | undefined;
            description?: string | undefined;
            file?: Blob | undefined;
        } = {
            name: 'TEST',
            filename: 'test.txt',
            description: 'TEST',
            file: new Blob(['Hello World'])
        }

        // Act
        const response = await client.inbox.createInboxDocument({ companySlug, formData })

        // Assert
        assertType<string>(response)
    })

    it('Upload a document to the inbox', async () => {
        // Arrange
        let formData: {
            name?: string | undefined;
            filename?: string | undefined;
            description?: string | undefined;
            file?: Blob | undefined;
        } = {
            name: 'TEST',
            filename: 'test.txt',
            description: 'TEST',
            file: new Blob(['Hello World'])
        }

        const inboxDocumentFullUrl = await client.inbox.createInboxDocument({ companySlug, formData })
        let inboxDocumentId = Number(TestUtils.parseFullUrl(inboxDocumentFullUrl))


        // Act
        const response = await client.inbox.getInboxDocument({ companySlug, inboxDocumentId })

        // Assert
        assertType<inboxResult>(response)
    })
})
import { assertType, beforeAll, beforeEach, describe, it } from 'vitest'
import { attachment, draftRequest, draftResult, FikenClient, payment, saleRequest, saleResult } from '../src/index'
import 'dotenv/config'
import { TestUtils } from './utils'

describe('Sales Service', () => {

    let companySlug: string
    let client: FikenClient
    let sale: saleResult

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    beforeEach(async () => {
        sale = await TestUtils.createTestSale(client, companySlug)
    })

    it('Returns all sales for given company', async () => {
        // Arrange

        // Act
        const response = await client.sales.getSales({ companySlug })

        // Assert
        assertType<saleResult[]>(response)
    })

    it('Creates a new sale', async () => {
        // Arrange
        let requestBody: saleRequest = {
            date: '2024-01-01',
            currency: 'NOK',
            kind: saleRequest.kind.EXTERNAL_INVOICE,
            lines: [{
                vatType: 'NONE',
                description: 'TEST',
                account: '3220',
                netPrice: 1,
                vat: 0,
            }]
        }

        // Act
        const response = await client.sales.createSale({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns sale with specified id', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId

        // Act
        const response = await client.sales.getSale({ companySlug, saleId })

        // Assert
        assertType<saleResult>(response)
    })

    it('Marks the sale as settled without payment', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId
        let settledDate = "2024-01-01"

        // Act
        const response = await client.sales.settledSale({ companySlug, saleId, settledDate })

        // Assert
        assertType<saleResult>(response)
    })

    it('Sets the deleted flag for a sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId
        let description = "test"

        // Act
        const response = await client.sales.deleteSale({ companySlug, saleId, description })

        // Assert
        assertType<saleResult>(response)
    })

    it('Returns all attachments for specified sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId

        // Act
        const response = await client.sales.getSaleAttachments({ companySlug, saleId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to a Sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId
        let formData: {
            filename?: string | undefined;
            attachToPayment?: boolean | undefined;
            attachToSale?: boolean | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            attachToSale: true,
            file: new Blob(['Hello World'])
        }

        // Act
        const response = await client.sales.addAttachmentToSale({ companySlug, saleId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Returns all payments for given sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId

        // Act
        const response = await client.sales.getSalePayments({ companySlug, saleId })

        // Assert
        assertType<payment[]>(response)
    })

    it('Creates a new payment for a given sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId

        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not contain accountCode')
        }

        let requestBody: payment = {
            account: bankAccount.accountCode,
            amount: 1,
            date: '2024-01-01',
        }

        // Act
        const response = await client.sales.createSalePayment({ companySlug, saleId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Creates a new payment for a given sale', async () => {
        // Arrange
        if (!sale.saleId) {
            throw Error('sale does not have saleId')
        }
        let saleId = sale.saleId

        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not contain accountCode')
        }

        let requestBody: payment = {
            account: bankAccount.accountCode,
            amount: 1,
            date: '2024-01-01',
        }

        const paymentFullUrl = await client.sales.createSalePayment({ companySlug, saleId, requestBody })
        let paymentId = Number(TestUtils.parseFullUrl(paymentFullUrl))

        // Act
        const response = await client.sales.getSalePayment({ companySlug, saleId, paymentId })

        // Assert
        assertType<payment>(response)
    })

    it('Returns all sale drafts for given company', async () => {
        // Arrange

        // Act
        const response = await client.sales.getSaleDrafts({ companySlug })

        // Assert
        assertType<draftResult[]>(response)
    })

    it('Creates a sale draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        // Act
        const response = await client.sales.createSaleDraft({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns draft with specified id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        // Act
        const response = await client.sales.getSaleDraft({ companySlug, draftId })

        // Assert
        assertType<draftResult>(response)
    })

    it('Updates draft with provided id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        requestBody = {
            ...requestBody,
            ...{
                lines: requestBody.lines.map(line => ({ ...line, ...{ text: 'UPDATED TEST' } }))
            }
        }

        // Act
        const response = await client.sales.updateSaleDraft({ companySlug, draftId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete draft with specified id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        // Act
        const response = await client.sales.deleteSaleDraft({ companySlug, draftId })

        // Assert
    })

    it('Returns all attachments for specified draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        // Act
        const response = await client.sales.getSaleDraftAttachments({ companySlug, draftId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to a draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        let formData: {
            filename?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(["Hello World"])
        }

        // Act
        const response = await client.sales.addAttachmentToSaleDraft({ companySlug, draftId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Creates a sale from an already created draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: false,
            lines: [
                {
                    gross: 100,
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    net: 100,
                    text: 'TEST',
                }
            ]
        }

        const draftFullUrl = await client.sales.createSaleDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(draftFullUrl))

        let formData: {
            filename?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(["Hello World"])
        }

        // Act
        const response = await client.sales.createSaleFromDraft({ companySlug, draftId })

        // Assert
        assertType<string>(response)
    })
})
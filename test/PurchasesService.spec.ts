import { assertType, beforeAll, describe, expect, it } from 'vitest'
import { attachment, draftRequest, draftResult, FikenClient, payment, purchaseRequest, purchaseResult } from '../src/index'
import 'dotenv/config'
import { TestUtils } from './utils'

describe('Purchases Service', () => {

    let companySlug: string
    let client: FikenClient
    let purchase: purchaseResult

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all purchases for given company', async () => {
        // Arrange

        // Act
        const response = await client.purchases.getPurchases({ companySlug })

        // Assert
        assertType<purchaseResult[]>(response)
    })

    it('Creates a new purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        // Act
        const response = await client.purchases.createPurchase({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns purchase with specified id', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        // Act
        const response = await client.purchases.getPurchase({ companySlug, purchaseId })

        // Assert
        assertType<purchaseResult>(response)
    })

    it('Sets the deleted flag for a purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        // Act
        const response = await client.purchases.deletePurchase({ companySlug, purchaseId, description: "TEST" })

        // Assert
        assertType<purchaseResult>(response)
        expect(response.deleted).toBe(true)
    })

    it('Returns all attachments for specified purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        // Act
        const response = await client.purchases.getPurchaseAttachments({ companySlug, purchaseId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to a Purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        let formData: {
            filename?: string | undefined;
            attachToPayment?: boolean | undefined;
            attachToSale?: boolean | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(['Hello World'])
        }

        // Act
        const response = await client.purchases.addAttachmentToPurchase({ companySlug, purchaseId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Returns all purchases for given company', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }

        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        // Act
        const response = await client.purchases.getPurchasePayments({ companySlug, purchaseId })

        // Assert
        assertType<payment[]>(response)
    })

    it('Creates a new payment for a purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }
        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        let paymentRequestBody: payment = {
            account: bankAccount.accountCode,
            amount: 1,
            date: '2024-01-01',
        }

        // Act
        const response = await client.purchases.createPurchasePayment({ companySlug, purchaseId, requestBody: paymentRequestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns given payment for specified purchase', async () => {
        // Arrange
        let bankAccount = await TestUtils.getBankAccount(client, companySlug)
        if (!bankAccount.accountCode) {
            throw Error('bankAccount does not have accountCode')
        }
        let requestBody: purchaseRequest = {
            currency: 'NOK',
            date: '2024-01-01',
            kind: purchaseRequest.kind.CASH_PURCHASE,
            lines: [
                {
                    account: bankAccount.accountCode,
                    vatType: 'NONE',
                    description: 'TEST',
                    netPrice: 1
                }
            ]
        }
        const purchaseFullUrl = await client.purchases.createPurchase({ companySlug, requestBody })
        let purchaseId = Number(TestUtils.parseFullUrl(purchaseFullUrl))

        let paymentRequestBody: payment = {
            account: bankAccount.accountCode,
            amount: 1,
            date: '2024-01-01',
        }

        const paymentFullUrl = await client.purchases.createPurchasePayment({ companySlug, purchaseId, requestBody: paymentRequestBody })
        let paymentId = Number(TestUtils.parseFullUrl(paymentFullUrl))
        // Act
        const response = await client.purchases.getPurchasePayment({ companySlug, purchaseId, paymentId })

        // Assert
        assertType<payment>(response)
    })

    it('Returns all purchase drafts for given company', async () => {
        // Arrange

        // Act
        const response = await client.purchases.getPurchaseDrafts({ companySlug })

        // Assert
        assertType<draftResult[]>(response)
    })

    it('Creates a purchase draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        // Act
        const response = await client.purchases.createPurchaseDraft({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns draft with specified id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        // Act
        const response = await client.purchases.getPurchaseDraft({ companySlug, draftId })

        // Assert
        assertType<draftResult>(response)
    })

    it('Updates draft with provided id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        requestBody = {
            ...requestBody,
            ...{
                lines: requestBody.lines.map(line => ({ ...line, ...{ text: 'UPDATED TEST' } }))
            }
        }

        // Act
        const response = await client.purchases.updatePurchaseDraft({ companySlug, draftId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete draft with specified id', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        // Act
        const response = await client.purchases.deletePurchaseDraft({ companySlug, draftId })

        // Assert
    })

    it('Returns all attachments for specified draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        // Act
        const response = await client.purchases.getPurchaseDraftAttachments({ companySlug, draftId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to a draft', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        let formData: {
            filename?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(['Hello World'])
        }

        // Act
        const response = await client.purchases.addAttachmentToPurchaseDraft({ companySlug, draftId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Creates a purchase from an already created draft.', async () => {
        // Arrange
        let requestBody: draftRequest = {
            cash: true,
            lines: [
                {
                    incomeAccount: '3220',
                    vatType: 'NONE',
                    gross: 1,
                    net: 1,
                    text: 'TEST',
                }
            ]
        }

        const purchaseDraftFullUrl = await client.purchases.createPurchaseDraft({ companySlug, requestBody })
        let draftId = Number(TestUtils.parseFullUrl(purchaseDraftFullUrl))

        // Act
        const response = await client.purchases.createPurchaseFromDraft({ companySlug, draftId })

        // Assert
        assertType<string>(response)
    })

})



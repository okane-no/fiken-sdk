import { assertType, beforeAll, describe, it } from 'vitest'
import { attachment, counter, FikenClient, invoiceishDraftLine, invoiceishDraftRequest, invoiceishDraftResult, offer } from '../src/index'
import 'dotenv/config'
import { beforeEach } from 'node:test'
import { TestUtils } from './utils'

describe('Offers Service', () => {

    let companySlug: string
    let client: FikenClient
    let offer: offer

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    beforeEach(async () => {
        offer = await TestUtils.createTestOffer(client, companySlug)
    })

    it('Returns all offers for given company', async () => {
        // Arrange

        // Act
        const response = await client.offers.getOffers({ companySlug })

        // Assert
        assertType<offer[]>(response)
    })

    it('Returns offer with specified id', async () => {
        // Arrange
        if (!offer.offerId) {
            throw Error('offer does not have offerId')
        }

        // Act
        const response = await client.offers.getOffer({ companySlug, offerId: offer.offerId.toString() })

        // Assert
        assertType<offer>(response)
    })

    it('Retrieves the counter for offers if it has been created', async () => {
        // Arrange

        // Act
        const response = await client.offers.getOfferCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    it.skip('Creates the first offer number which is then increased by one with every new offer', async () => {
        // Arrange

        // Act
        const response = await client.offers.createOfferCounter({ companySlug })

        // Assert
        assertType<counter>(response)
    })

    it('Returns all offer drafts for given company', async () => {
        // Arrange

        // Act
        const response = await client.offers.getOfferDrafts({ companySlug })

        // Assert
        assertType<invoiceishDraftResult[]>(response)
    })

    it('Creates an offer draft', async () => {
        // Arrange
        let requestBody: invoiceishDraftRequest = {
            customerId: offer.contactId,
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

        // Act
        const response = await client.offers.createOfferDraft({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns offer draft with specified id', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        // Act
        const response = await client.offers.getOfferDraft({ companySlug, draftId })

        // Assert
        assertType<invoiceishDraftResult>(response)
    })


    it('Updates order confirmation draft with provided id', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        let requestBody: invoiceishDraftRequest = {
            customerId: offer.contactId,
            daysUntilDueDate: 120,
            type: invoiceishDraftRequest.type.OFFER,
            lines: offer.lines!.map(offer => ({...offer, ...{quantity: offer.quantity ?? 1}}))
        }

        // Act
        const response = await client.offers.updateOfferDraft({ companySlug, draftId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Deletes order confirmation draft with specified id', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        // Act
        const response = await client.offers.deleteOfferDraft({ companySlug, draftId })

        // Assert
    })

    it('Returns all attachments for specified draft', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        // Act
        const response = await client.offers.getOfferDraftAttachments({ companySlug, draftId })

        // Assert
        assertType<attachment[]>(response)
    })

    it('Creates and adds a new attachment to an order confirmation draft', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        let formData: {
            filename?: string | undefined;
            comment?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(["Hello World"])
        }

        // Act
        const response = await client.offers.addAttachmentToOfferDraft({ companySlug, draftId, formData })

        // Assert
        assertType<string>(response)
    })

    it('Creates an order confirmation from an already created draft', async () => {
        // Arrange
        if(!offer.offerId)
        {
            throw Error('offer does not have offerId')
        }
        let draftId = offer.offerId

        let formData: {
            filename?: string | undefined;
            comment?: string | undefined;
            file?: Blob | undefined;
        } = {
            filename: 'test.txt',
            file: new Blob(["Hello World"])
        }

        // Act
        const response = await client.offers.createOfferFromDraft({ companySlug, draftId })

        // Assert
        assertType<string>(response)
    })
})
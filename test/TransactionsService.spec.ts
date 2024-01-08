import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, transaction } from '../src/index'
import 'dotenv/config'

describe('Transactions Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all transactions for the specified company', async () => {
        // Arrange

        // Act
        const response = await client.transactions.getTransactions({ companySlug })

        // Assert
        assertType<transaction[]>(response)
    })

    it('Returns given transaction with associated id', async () => {
        // Arrange
        const transactions = await client.transactions.getTransactions({ companySlug })
        let transaction = transactions[0]
        if(!transaction) {
            throw Error('Could not retrieve transactionq')
        }
        let transactionId = transaction.transactionId
        if(!transactionId){
            throw Error('Transaction does not contain transaction ID')
        }

        // Act
        const response = await client.transactions.getTransaction({ companySlug, transactionId })

        // Assert
        assertType<transaction>(response)
    })
})
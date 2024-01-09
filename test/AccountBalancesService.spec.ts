import { assertType, beforeAll, describe, it } from 'vitest'
import { accountBalance, FikenClient } from '../src/index'
import 'dotenv/config'

describe('Account Balances Service', () => {

    let companySlug: string
    let date: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        date = "2024-01-01"

        client = new FikenClient({TOKEN: process.env.ACCESS_TOKEN})
    })

    it('Retrieves the bookkeeping accounts and closing balances for a given date', async () => {
        // Arrange

        // Act
        const response = await client.accountBalances.getAccountBalances({companySlug, date})

        // Assert
        response.forEach(accountBalance => {
            assertType<accountBalance>(accountBalance)
        })
    })

    it('Retrieves the specified bookkeping account and balance for a given date', async () => {
        // Arrange
        let accountCode = process.env.ACCOUNT_CODE!

        // Act
        const response = await client.accountBalances.getAccountBalance({companySlug, accountCode, date})

        // Assert
        assertType<accountBalance>(response)

    })
})
import { assertType, beforeAll, describe, it } from 'vitest'
import { account, AccountsService, FikenClient } from '../src/index'
import 'dotenv/config'

describe('Accounts Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!

        client = new FikenClient({TOKEN: process.env.ACCESS_TOKEN})
    })

    it('Retrieves the bookkeeping accounts for the current year', async () => {
        // Arrange

        // Act
        const response = await client.accounts.getAccounts({companySlug})

        // Assert
        response.forEach(account => {
            assertType<account>(account)
        })
    })

    it('Retrieves the specified bookkeping account', async () => {
        // Arrange
        let accountCode = process.env.ACCOUNT_CODE!

        // Act
        const response = await client.accounts.getAccount({companySlug, accountCode})

        // Assert
        assertType<account>(response)

    })
})
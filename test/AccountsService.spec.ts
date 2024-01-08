import { assertType, beforeAll, describe, it } from 'vitest'
import { account, AccountsService, OpenAPI } from '../src/index'
import 'dotenv/config'

describe('Accounts Service', () => {

    let companySlug: string

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!
    })

    it('Retrieves the bookkeeping accounts for the current year', async () => {
        // Arrange

        // Act
        const response = await AccountsService.getAccounts(companySlug)

        // Assert
        response.forEach(account => {
            assertType<account>(account)
        })
    })

    it('Retrieves the specified bookkeping account', async () => {
        // Arrange
        let accountCode = process.env.ACCOUNT_CODE!

        // Act
        const response = await AccountsService.getAccount(companySlug, accountCode)

        // Assert
        assertType<account>(response)

    })
})
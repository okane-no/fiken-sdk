import { assertType, beforeAll, describe, it } from 'vitest'
import { accountBalance, AccountBalancesService, OpenAPI } from '../src/index'
import 'dotenv/config'

describe('Account Balances Service', () => {

    let companySlug: string
    let date: string

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!
        date = "2024-01-01"
    })

    it('Retrieves the bookkeeping accounts and closing balances for a given date', async () => {
        // Arrange

        // Act
        const response = await AccountBalancesService.getAccountBalances(companySlug, date)

        // Assert
        response.forEach(accountBalance => {
            assertType<accountBalance>(accountBalance)
        })
    })

    it('Retrieves the specified bookkeping account and balance for a given date', async () => {
        // Arrange
        let accountCode = process.env.ACCOUNT_CODE!

        // Act
        const response = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)

        // Assert
        assertType<accountBalance>(response)

    })
})
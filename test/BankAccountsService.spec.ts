import { assertType, beforeAll, describe, it } from 'vitest'
import { bankAccountResult, BankAccountsService, FikenClient, OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('Bank Accounts Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({TOKEN: process.env.ACCESS_TOKEN})
    })

    it('Retrieves all bank accounts associated with the company', async () => {
        // Arrange

        // Act
        const response = await client.bankAccounts.getBankAccounts({companySlug})

        // Assert
        response.forEach(bankAccount => {
            assertType<bankAccountResult>(bankAccount)
        })
    })
})
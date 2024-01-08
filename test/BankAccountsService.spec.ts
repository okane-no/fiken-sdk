import { assertType, beforeAll, describe, it } from 'vitest'
import { bankAccountResult, BankAccountsService, OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('Bank Accounts Service', () => {

    let companySlug: string

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!
    })

    it('Retrieves all bank accounts associated with the company', async () => {
        // Arrange

        // Act
        const response = await BankAccountsService.getBankAccounts(companySlug)

        // Assert
        response.forEach(bankAccount => {
            assertType<bankAccountResult>(bankAccount)
        })
    })
})
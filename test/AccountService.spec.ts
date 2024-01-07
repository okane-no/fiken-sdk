import { beforeAll, describe, expect, it } from 'vitest'
import { account, AccountsService, OpenAPI } from '../src/index'
import 'dotenv/config'
import { MatchersV3, PactV3 } from '@pact-foundation/pact'
import path from 'path'

describe('Account Service', () => {

    let companySlug = "acme"
    let date = "2024-01-01"

    const provider = new PactV3({
        dir: path.resolve(process.cwd(), 'pacts'),
        consumer: 'fiken-sdk',
        provider: 'Fiken API',
    });

    const accountExample: account = {
        "code": "1500:10029",
        "name": "John Lewis"
    };


    it('retrieves account balances', async () => {
        // Arrange
        const EXPECTED_BODY = MatchersV3.eachLike(accountExample);

        provider
            .given('I have a list of accounts')
            .uponReceiving('a request for all accounts')
            .withRequest({
                method: 'GET',
                path: `/companies/${companySlug}/account`,
                query: { date: date, pageSize: '25' },
                headers: { Accept: 'application/json' }
            })
            .willRespondWith({
                status: 200,
                contentType: 'application/json',
                body: EXPECTED_BODY
            })

        return provider.executeTest(async (mockserver) => {
            // Act
            OpenAPI.BASE = mockserver.url
            const accounts = await AccountsService.getAccounts(companySlug)

            // Assert
            expect(accounts[0]).to.deep.eq(accountExample)
        })
    })

    it('retrieves account', async () => {
        // Arrange
        const EXPECTED_BODY = MatchersV3.like(accountExample);

        let accountCode = "1"
    

        provider
            .given('I have a list of accounts')
            .uponReceiving('a request for an account')
            .withRequest({
                method: 'GET',
                path: `/companies/${companySlug}/accountBalances/${accountCode}`,
                query: { date: date },
                headers: { Accept: 'application/json' }
            })
            .willRespondWith({
                status: 200,
                contentType: 'application/json',
                body: EXPECTED_BODY
            })

        return provider.executeTest(async (mockserver) => {
            // Act
            const account: account = await AccountsService.getAccount(companySlug, accountCode)

            // Assert
            expect(account).to.deep.eq(accountExample)
        })
    })
})
import { beforeAll, describe, expect, it } from 'vitest'
import { accountBalance, AccountBalancesService, OpenAPI } from '../src/index'
import { PactV3, MatchersV3 } from '@pact-foundation/pact'
import 'dotenv/config'
import path from 'path';

describe('Account Balances Service', () => {

    let companySlug = "acme"
    let date = "2024-01-01"

    const provider = new PactV3({
        dir: path.resolve(process.cwd(), 'pacts'),
        consumer: 'fiken-sdk',
        provider: 'Fiken API',
    });

    const accountBalanceExample: accountBalance = {
        "code": "1500:10029",
        "name": "John Lewis",
        "balance": 15200
    };


    it('retrieves account balances', async () => {
        // Arrange
        const EXPECTED_BODY = MatchersV3.eachLike(accountBalanceExample);

        provider
            .given('I have a list of account balances')
            .uponReceiving('a request for all account balances')
            .withRequest({
                method: 'GET',
                path: `/companies/${companySlug}/accountBalances`,
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
            const accountBalances = await AccountBalancesService.getAccountBalances(companySlug, date)

            // Assert
            expect(accountBalances[0]).to.deep.eq(accountBalanceExample)
        })
    })

    it('retrieves account balance', async () => {
        // Arrange
        let accountCode = "1"

        const EXPECTED_BODY = MatchersV3.like({ ...accountBalanceExample, ...{ accountCode: 1 } });

        provider
            .given('I have a list of account balances')
            .uponReceiving('a request for a specific account balance')
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
            const accountBalance: accountBalance = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)

            // Assert
            expect(accountBalance).to.deep.eq(accountBalanceExample)
        })
    })
})
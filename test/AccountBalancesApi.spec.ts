import { beforeAll, describe, expect, it } from 'vitest'
import { AccountBalance, AccountBalancesApi } from '../src/api'
import 'dotenv/config'
import { IncomingMessage } from 'http'
import {AccountBalancesService} from '../generated/index'

describe('Account Balances API', () => {
    let client: AccountBalancesApi
    let accessToken: string | undefined

    beforeAll(async () => {
        accessToken = process.env.ACCESS_TOKEN

        if (!accessToken)
            throw Error('accessToken can not be undefined')

        client = new AccountBalancesApi()
        client.accessToken = accessToken
    })

    it('Should be able to create API client', () => {
        let api = new AccountBalancesApi()
        api.accessToken = process.env.ACCESS_TOKEN!

        expect(api).toBeInstanceOf(AccountBalancesApi)
    })

    it('Should be able to', async () => {
        let companySlug = 'test'
        let accountCode = ''
        let date = ''

        const response = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)
        expect(response.name).not.toBeUndefined()
        expect(response.name?.length).toBeGreaterThan(0)
    })
})


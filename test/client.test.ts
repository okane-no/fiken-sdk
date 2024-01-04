import { expect, test } from 'vitest'
import * as Fiken from '../src/api'
import 'dotenv/config'

test('Should be able to retrieve environment variables from .env', () => {
    const accessToken = process.env.ACCESS_TOKEN

    expect(accessToken).not.toBeNull()
    console.log(accessToken)
    expect(accessToken?.length).toBeGreaterThan(0)
})

test('Should be able to create API client', () => {
    let accountBalances = new Fiken.AccountBalancesApi()
    accountBalances.accessToken = process.env.ACCESS_TOKEN!

    expect(accountBalances).toBeInstanceOf(Fiken.AccountBalancesApi)
})
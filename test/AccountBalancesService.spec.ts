import { beforeAll, describe, expect, it } from 'vitest'
import { AccountBalancesService, OpenAPI } from '../src/index'
import 'dotenv/config'

describe('Account Balances Service', () => {
    let companySlug = 'test'
    let accountCode = ''
    let date = ''

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN!
    })

    // Account balances

    it('Should be able to get account balances', async () => {
        await expect(async () => await AccountBalancesService.getAccountBalances(companySlug, accountCode)).rejects.not.toThrowError()
    })

    it('Account balances name should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalances(companySlug, accountCode)
        if (response.length === 0) {
            console.warn('Response contains no account balances')
            return
        }

        response.forEach(response => {
            expect(response.name).not.toBeUndefined()
            expect(response.name?.length).toBeGreaterThan(0)
        })
    })

    it('Account balances code should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalances(companySlug, accountCode)
        if (response.length === 0) {
            console.warn('Response contains no account balances')
            return
        }

        response.forEach(response => {
            expect(response.code).not.toBeUndefined()
            expect(response.code?.length).toBeGreaterThan(0)
        })
    })

    it('Account balances should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalances(companySlug, accountCode)
        if (response.length === 0) {
            console.warn('Response contains no account balances')
            return
        }

        response.forEach(response => {
            expect(response.balance).not.toBeUndefined()
        })
    })

    // Account Balance

    it('Should be able to get account balance', async () => {
        await expect(async () => await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)).rejects.not.toThrowError()
    })

    it('Account balance name should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)
        expect(response.name).not.toBeUndefined()
        expect(response.name?.length).toBeGreaterThan(0)
    })

    it('Account balance code should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)
        expect(response.code).not.toBeUndefined()
        expect(response.code?.length).toBeGreaterThan(0)
    })

    it('Account balance should not be undefined or empty', async () => {
        const response = await AccountBalancesService.getAccountBalance(companySlug, accountCode, date)
        expect(response.balance).not.toBeUndefined()
    })
})


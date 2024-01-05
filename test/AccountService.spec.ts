import { beforeAll, describe, expect, it } from 'vitest'
import { AccountBalancesService, AccountsService, OpenAPI } from '../src/index'
import 'dotenv/config'

describe('Account Service', () => {
    let companySlug = 'test'
    let accountCode = ''

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN!
    })

    // Accounts

    it('Should be able to get accounts', async () => {
        await expect(async () => await AccountsService.getAccounts(companySlug)).rejects.not.toThrowError()
    })

    it('Accounts name should not be undefined or empty', async () => {
        const response = await AccountsService.getAccounts(companySlug)
        if (response.length === 0) {
            console.warn('Response contains no accounts')
            return
        }

        response.forEach(response => {
            expect(response.name).not.toBeUndefined()
            expect(response.name?.length).toBeGreaterThan(0)
        })
    })

    it('Accounts code should not be undefined or empty', async () => {
        const response = await await AccountsService.getAccounts(companySlug)
        if (response.length === 0) {
            console.warn('Response contains no accounts')
            return
        }

        response.forEach(response => {
            expect(response.code).not.toBeUndefined()
            expect(response.code?.length).toBeGreaterThan(0)
        })
    })

    // Account Balance

    it('Should be able to get account', async () => {
        await expect(async () => await AccountsService.getAccount(companySlug, accountCode)).rejects.not.toThrowError()
    })

    it('Account name should not be undefined or empty', async () => {
        const response = await AccountsService.getAccount(companySlug, accountCode)
        expect(response.name).not.toBeUndefined()
        expect(response.name?.length).toBeGreaterThan(0)
    })

    it('Account code should not be undefined or empty', async () => {
        const response = await AccountsService.getAccount(companySlug, accountCode)
        expect(response.code).not.toBeUndefined()
        expect(response.code?.length).toBeGreaterThan(0)
    })
})


import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient } from '../src/index'
import 'dotenv/config'

describe('Groups Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all customer groups for given company', async () => {
        // Arrange

        // Act
        const response = await client.groups.getGroups({ companySlug })

        // Assert
        assertType<string[]>(response)
    })
})
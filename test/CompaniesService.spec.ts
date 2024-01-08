import { assertType, beforeAll, describe, it } from 'vitest'
import { CompaniesService, company, FikenClient, OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('Companies Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({TOKEN: process.env.ACCESS_TOKEN})
    })

    it('Returns all companies from the system that the user has access to', async () => {
        // Arrange

        // Act
        const response = await client.companies.getCompanies({})

        // Assert
        response.forEach(company => {
            assertType<company>(company)
        })
    })

    it('Returns all companies from the system that the user has access to', async () => {
        // Arrange

        // Act
        const response = await client.companies.getCompany({companySlug})

        // Assert
        assertType<company>(response)
    })


})




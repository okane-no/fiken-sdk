import { assertType, beforeAll, describe, it } from 'vitest'
import { CompaniesService, company, OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('Companies Service', () => {

    let companySlug: string

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
        companySlug = process.env.COMPANY_SLUG!
    })

    it('Returns all companies from the system that the user has access to', async () => {
        // Arrange

        // Act
        const response = await CompaniesService.getCompanies()

        // Assert
        response.forEach(company => {
            assertType<company>(company)
        })
    })

    it('Returns all companies from the system that the user has access to', async () => {
        // Arrange

        // Act
        const response = await CompaniesService.getCompany(companySlug)

        // Assert
        assertType<company>(response)
    })


})




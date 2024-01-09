import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, projectRequest, projectResult } from '../src/index'
import 'dotenv/config'
import { TestUtils } from './utils'

describe('Projects Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
    })

    it('Returns all projects for given company', async () => {
        // Arrange

        // Act
        const response = await client.projects.getProjects({ companySlug })

        // Assert
        assertType<projectResult[]>(response)
    })

    it('Creates a new project', async () => {
        // Arrange
        let requestBody: projectRequest = {
            startDate: '2024-01-01'
        }

        // Act
        const response = await client.projects.createProject({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns project with specified id', async () => {
        // Arrange
        let requestBody: projectRequest = {
            startDate: '2024-01-01'
        }

        const projectFullUrl = await client.projects.createProject({ companySlug, requestBody })
        let projectId = Number(TestUtils.parseFullUrl(projectFullUrl))

        // Act
        const response = await client.projects.getProject({ companySlug, projectId })

        // Assert
        assertType<projectResult>(response)
    })

    it('Updates project with provided id', async () => {
        // Arrange
        let requestBody: projectRequest = {
            startDate: '2024-01-01'
        }

        const projectFullUrl = await client.projects.createProject({ companySlug, requestBody })
        let projectId = Number(TestUtils.parseFullUrl(projectFullUrl))

        requestBody = { ...requestBody, ...{ completed: true } }

        // Act
        const response = await client.projects.updateProject({ companySlug, projectId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete project with specified id', async () => {
        // Arrange
        let requestBody: projectRequest = {
            startDate: '2024-01-01'
        }

        const projectFullUrl = await client.projects.createProject({ companySlug, requestBody })
        let projectId = Number(TestUtils.parseFullUrl(projectFullUrl))

        // Act
        const response = await client.projects.deleteProject({ companySlug, projectId })

        // Assert
    })




})
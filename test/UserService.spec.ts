import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('User Service', () => {

    let client: FikenClient

    beforeAll(async () => {
        client = new FikenClient({TOKEN: process.env.ACCESS_TOKEN})
    })

    it('Returns information about the user', async () => {
        // Arrange

        // Act
        const response = await client.user.getUser()

        // Assert
        assertType<userinfo>(response)
    })
})
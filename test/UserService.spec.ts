import { assertType, beforeAll, describe, it } from 'vitest'
import { OpenAPI, userinfo, UserService } from '../src/index'
import 'dotenv/config'

describe('User Service', () => {

    beforeAll(async () => {
        OpenAPI.TOKEN = process.env.ACCESS_TOKEN
    })

    it('Returns information about the user', async () => {
        // Arrange

        // Act
        const response = await UserService.getUser()

        // Assert
        assertType<userinfo>(response)
    })
})
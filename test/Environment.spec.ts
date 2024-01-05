import { expect, test } from 'vitest'
import 'dotenv/config'

test('Should be able to retrieve environment variables from .env', () => {
    const accessToken = process.env.ACCESS_TOKEN

    expect(accessToken).not.toBeUndefined()
    expect(accessToken?.length).toBeGreaterThan(0)
})


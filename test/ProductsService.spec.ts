import { assertType, beforeAll, describe, it } from 'vitest'
import { FikenClient, product, productSalesReportRequest, productSalesReportResult, userinfo, UserService } from '../src/index'
import 'dotenv/config'

const testProductName = "TEST"
let testProduct: product

const getTestProduct = async (client: FikenClient, companySlug: string) => {

    const response = await client.products.getProducts({ companySlug })

    const testProduct = response.find(product => product.name === testProductName)

    if (testProduct) {
        return testProduct
    } else {
        let testProduct: product = {
            name: testProductName,
            active: false,
            incomeAccount: '3000',
            vatType: 'HIGH',
        }
        const response = await client.products.createProduct({ companySlug: companySlug, requestBody: testProduct })

        return testProduct
    }
}

describe('Products Service', () => {

    let companySlug: string
    let client: FikenClient

    beforeAll(async () => {
        companySlug = process.env.COMPANY_SLUG!
        client = new FikenClient({ TOKEN: process.env.ACCESS_TOKEN })
        testProduct = await getTestProduct(client, companySlug)
    })

    it('Creates a report based on provided specifications', async () => {
        // Arrange
        const requestBody: productSalesReportRequest = {
            from: "2024-01-01",
            to: "2024-12-31"
        }

        // Act
        const response = await client.products.createProductSalesReport({ companySlug, requestBody })

        // Assert
        assertType<productSalesReportResult[]>(response)
    })

    it('Returns all products for given company', async () => {
        // Arrange

        // Act
        const response = await client.products.getProducts({ companySlug })

        // Assert
        assertType<product[]>(response)
    })

    it('Creates a new product', async () => {
        // Arrange
        const requestBody: product = {
            name: testProductName,
            active: false,
            incomeAccount: '3000',
            vatType: 'HIGH',
            stock: undefined,

        }

        // Act
        const response = await client.products.createProduct({ companySlug, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Returns product with specified id', async () => {
        // Arrange
        const products = await client.products.getProducts({ companySlug })
        let product = products[0]

        let productId = product.productId
        if (!productId) {
            throw Error("Test product did not have product ID")
        }

        // Act
        const response = await client.products.getProduct({ companySlug, productId })

        // Assert
        assertType<product>(response)
    })

    it('Updates an existing product', async () => {
        // Arrange
        const products = await client.products.getProducts({ companySlug }) //TODO: Add pagination

        let product = (await products).find(product => product.name === testProductName)
        if (!product) {
            throw Error("Could not find test product")
        }

        let productId = product.productId
        if (!productId) {
            throw Error("Test product did not have product ID")
        }

        let requestBody: product = { ...product, ...{ stock: 1 } }


        // Act
        const response = await client.products.updateProduct({ companySlug, productId, requestBody })

        // Assert
        assertType<string>(response)
    })

    it('Delete product with specified id', async () => {
        // Arrange
        const products = await client.products.getProducts({ companySlug }) //TODO: Add pagination

        let product = (await products).find(product => product.name === testProductName)
        if (!product) {
            throw Error("Could not find test product")
        }

        let productId = product.productId
        if (!productId) {
            throw Error("Test product did not have product ID")
        }

        // Act
        const response = await client.products.deleteProduct({ companySlug, productId })

        // Assert

    })

})
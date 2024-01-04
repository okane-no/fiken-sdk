// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Product } from '../models/Product';
import { ProductSalesReportRequest } from '../models/ProductSalesReportRequest';
import { ProductSalesReportResult } from '../models/ProductSalesReportResult';

/**
 * no description
 */
export class ProductsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param product 
     */
    public async createProduct(companySlug: string, product: Product, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "createProduct", "companySlug");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "createProduct", "product");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/products'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(product, "Product", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param productSalesReportRequest 
     */
    public async createProductSalesReport(companySlug: string, productSalesReportRequest: ProductSalesReportRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "createProductSalesReport", "companySlug");
        }


        // verify required parameter 'productSalesReportRequest' is not null or undefined
        if (productSalesReportRequest === null || productSalesReportRequest === undefined) {
            throw new RequiredError("ProductsApi", "createProductSalesReport", "productSalesReportRequest");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/products/salesReport'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(productSalesReportRequest, "ProductSalesReportRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public async deleteProduct(companySlug: string, productId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "deleteProduct", "companySlug");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductsApi", "deleteProduct", "productId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/products/{productId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public async getProduct(companySlug: string, productId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "getProduct", "companySlug");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductsApi", "getProduct", "productId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/products/{productId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns all products for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param name Find all results with product name equal to the specified parameter.
     * @param productNumber Find all results with product number (varenummer) equal to the specified parameter.
     * @param active Returns active (true) or inactive (false) products.
     */
    public async getProducts(companySlug: string, page?: number, pageSize?: number, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, name?: string, productNumber?: string, active?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "getProducts", "companySlug");
        }

















        // Path Params
        const localVarPath = '/companies/{companySlug}/products'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (createdDate !== undefined) {
            requestContext.setQueryParam("createdDate", ObjectSerializer.serialize(createdDate, "string", "date"));
        }

        // Query Params
        if (createdDateLe !== undefined) {
            requestContext.setQueryParam("createdDateLe", ObjectSerializer.serialize(createdDateLe, "string", "date"));
        }

        // Query Params
        if (createdDateLt !== undefined) {
            requestContext.setQueryParam("createdDateLt", ObjectSerializer.serialize(createdDateLt, "string", "date"));
        }

        // Query Params
        if (createdDateGe !== undefined) {
            requestContext.setQueryParam("createdDateGe", ObjectSerializer.serialize(createdDateGe, "string", "date"));
        }

        // Query Params
        if (createdDateGt !== undefined) {
            requestContext.setQueryParam("createdDateGt", ObjectSerializer.serialize(createdDateGt, "string", "date"));
        }

        // Query Params
        if (lastModified !== undefined) {
            requestContext.setQueryParam("lastModified", ObjectSerializer.serialize(lastModified, "string", "date"));
        }

        // Query Params
        if (lastModifiedLe !== undefined) {
            requestContext.setQueryParam("lastModifiedLe", ObjectSerializer.serialize(lastModifiedLe, "string", "date"));
        }

        // Query Params
        if (lastModifiedLt !== undefined) {
            requestContext.setQueryParam("lastModifiedLt", ObjectSerializer.serialize(lastModifiedLt, "string", "date"));
        }

        // Query Params
        if (lastModifiedGe !== undefined) {
            requestContext.setQueryParam("lastModifiedGe", ObjectSerializer.serialize(lastModifiedGe, "string", "date"));
        }

        // Query Params
        if (lastModifiedGt !== undefined) {
            requestContext.setQueryParam("lastModifiedGt", ObjectSerializer.serialize(lastModifiedGt, "string", "date"));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (productNumber !== undefined) {
            requestContext.setQueryParam("productNumber", ObjectSerializer.serialize(productNumber, "string", ""));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @param product 
     */
    public async updateProduct(companySlug: string, productId: number, product: Product, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ProductsApi", "updateProduct", "companySlug");
        }


        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new RequiredError("ProductsApi", "updateProduct", "productId");
        }


        // verify required parameter 'product' is not null or undefined
        if (product === null || product === undefined) {
            throw new RequiredError("ProductsApi", "updateProduct", "product");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/products/{productId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(product, "Product", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ProductsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProductSalesReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createProductSalesReportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ProductSalesReportResult> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ProductSalesReportResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductSalesReportResult>", ""
            ) as Array<ProductSalesReportResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ProductSalesReportResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ProductSalesReportResult>", ""
            ) as Array<ProductSalesReportResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Product >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Product = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Product", ""
            ) as Product;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Product = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Product", ""
            ) as Product;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProducts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getProductsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Product> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Product> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Product>", ""
            ) as Array<Product>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Product> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Product>", ""
            ) as Array<Product>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProduct
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProductWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

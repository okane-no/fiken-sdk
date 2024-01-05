/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { product } from '../models/product';
import type { productSalesReportRequest } from '../models/productSalesReportRequest';
import type { productSalesReportResult } from '../models/productSalesReportResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns productSalesReportResult OK
     * @throws ApiError
     */
    public static createProductSalesReport(
        companySlug: string,
        requestBody: productSalesReportRequest,
    ): CancelablePromise<Array<productSalesReportResult>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/products/salesReport',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns all products for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param name Find all results with product name equal to the specified parameter.
     * @param productNumber Find all results with product number (varenummer) equal to the specified parameter.
     * @param active Returns active (true) or inactive (false) products.
     * @returns product OK
     * @throws ApiError
     */
    public static getProducts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        createdDate?: string,
        createdDateLe?: string,
        createdDateLt?: string,
        createdDateGe?: string,
        createdDateGt?: string,
        lastModified?: string,
        lastModifiedLe?: string,
        lastModifiedLt?: string,
        lastModifiedGe?: string,
        lastModifiedGt?: string,
        name?: string,
        productNumber?: string,
        active?: boolean,
    ): CancelablePromise<Array<product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/products',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'createdDate': createdDate,
                'createdDateLe': createdDateLe,
                'createdDateLt': createdDateLt,
                'createdDateGe': createdDateGe,
                'createdDateGt': createdDateGt,
                'lastModified': lastModified,
                'lastModifiedLe': lastModifiedLe,
                'lastModifiedLt': lastModifiedLt,
                'lastModifiedGe': lastModifiedGe,
                'lastModifiedGt': lastModifiedGt,
                'name': name,
                'productNumber': productNumber,
                'active': active,
            },
        });
    }

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createProduct(
        companySlug: string,
        requestBody: product,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/products',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all
     * products call; not to be confused with productNumber.
     *
     * @returns product OK
     * @throws ApiError
     */
    public static getProduct(
        companySlug: string,
        productId: number,
    ): CancelablePromise<product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/products/{productId}',
            path: {
                'companySlug': companySlug,
                'productId': productId,
            },
        });
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all
     * products call; not to be confused with productNumber.
     *
     * @param requestBody
     * @returns string Updated
     * @throws ApiError
     */
    public static updateProduct(
        companySlug: string,
        productId: number,
        requestBody: product,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/companies/{companySlug}/products/{productId}',
            path: {
                'companySlug': companySlug,
                'productId': productId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all
     * products call; not to be confused with productNumber.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteProduct(
        companySlug: string,
        productId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/companies/{companySlug}/products/{productId}',
            path: {
                'companySlug': companySlug,
                'productId': productId,
            },
        });
    }

}

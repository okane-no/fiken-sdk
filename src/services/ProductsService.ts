/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { product } from '../models/product';
import type { productSalesReportRequest } from '../models/productSalesReportRequest';
import type { productSalesReportResult } from '../models/productSalesReportResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a report based on provided specifications.
     * @returns productSalesReportResult OK
     * @throws ApiError
     */
    public createProductSalesReport({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: productSalesReportRequest,
    }): CancelablePromise<Array<productSalesReportResult>> {
        return this.httpRequest.request({
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
     * @returns product OK
     * @throws ApiError
     */
    public getProducts({
        companySlug,
        page,
        pageSize = 25,
        createdDate,
        createdDateLe,
        createdDateLt,
        createdDateGe,
        createdDateGt,
        lastModified,
        lastModifiedLe,
        lastModifiedLt,
        lastModifiedGe,
        lastModifiedGt,
        name,
        productNumber,
        active,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
         * Default value is 0.
         *
         */
        page?: number,
        /**
         * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
         * Default value is 25.
         *
         */
        pageSize?: number,
        /**
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDate?: string,
        /**
         * Returns results that were created before or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateLe?: string,
        /**
         * Returns results that were created strictly before the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateLt?: string,
        /**
         * Returns results that were created after or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateGe?: string,
        /**
         * Returns results that were created strictly after the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateGt?: string,
        /**
         * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModified?: string,
        /**
         * Returns results that have been last modified before or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedLe?: string,
        /**
         * Returns results that have been last modified strictly before the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedLt?: string,
        /**
         * Returns results that have been last modified after or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedGe?: string,
        /**
         * Returns results that have been last modified strictly after the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedGt?: string,
        /**
         * Find all results with product name equal to the specified parameter.
         */
        name?: string,
        /**
         * Find all results with product number (varenummer) equal to the specified parameter.
         */
        productNumber?: string,
        /**
         * Returns active (true) or inactive (false) products.
         */
        active?: boolean,
    }): CancelablePromise<Array<product>> {
        return this.httpRequest.request({
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
     * @returns string Created
     * @throws ApiError
     */
    public createProduct({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: product,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns product OK
     * @throws ApiError
     */
    public getProduct({
        companySlug,
        productId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The productId (primary key of the returned object) is returned in the GET all
         * products call; not to be confused with productNumber.
         *
         */
        productId: number,
    }): CancelablePromise<product> {
        return this.httpRequest.request({
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
     * @returns string Updated
     * @throws ApiError
     */
    public updateProduct({
        companySlug,
        productId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The productId (primary key of the returned object) is returned in the GET all
         * products call; not to be confused with productNumber.
         *
         */
        productId: number,
        requestBody: product,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns void
     * @throws ApiError
     */
    public deleteProduct({
        companySlug,
        productId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The productId (primary key of the returned object) is returned in the GET all
         * products call; not to be confused with productNumber.
         *
         */
        productId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/companies/{companySlug}/products/{productId}',
            path: {
                'companySlug': companySlug,
                'productId': productId,
            },
        });
    }

}

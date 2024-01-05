/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transaction } from '../models/transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionsService {

    /**
     * Returns all transactions for the specified company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
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
     * @returns transaction OK
     * @throws ApiError
     */
    public static getTransactions(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        lastModified?: string,
        lastModifiedLe?: string,
        lastModifiedLt?: string,
        lastModifiedGe?: string,
        lastModifiedGt?: string,
        createdDate?: string,
        createdDateLe?: string,
        createdDateLt?: string,
        createdDateGe?: string,
        createdDateGt?: string,
    ): CancelablePromise<Array<transaction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/transactions',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'lastModified': lastModified,
                'lastModifiedLe': lastModifiedLe,
                'lastModifiedLt': lastModifiedLt,
                'lastModifiedGe': lastModifiedGe,
                'lastModifiedGt': lastModifiedGt,
                'createdDate': createdDate,
                'createdDateLe': createdDateLe,
                'createdDateLt': createdDateLt,
                'createdDateGe': createdDateGe,
                'createdDateGt': createdDateGt,
            },
        });
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for
     * sales, purchases, and journal entries.
     *
     * @param companySlug Slug of company to retrieve
     * @param transactionId
     * @returns transaction OK
     * @throws ApiError
     */
    public static getTransaction(
        companySlug: string,
        transactionId: number,
    ): CancelablePromise<transaction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/transactions/{transactionId}',
            path: {
                'companySlug': companySlug,
                'transactionId': transactionId,
            },
        });
    }

}

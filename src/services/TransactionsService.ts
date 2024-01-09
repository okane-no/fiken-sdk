/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transaction } from '../models/transaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransactionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all transactions for the specified company
     * @returns transaction OK
     * @throws ApiError
     */
    public getTransactions({
        companySlug,
        page,
        pageSize = 25,
        lastModified,
        lastModifiedLe,
        lastModifiedLt,
        lastModifiedGe,
        lastModifiedGt,
        createdDate,
        createdDateLe,
        createdDateLt,
        createdDateGe,
        createdDateGt,
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
    }): CancelablePromise<Array<transaction>> {
        return this.httpRequest.request({
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
     * @returns transaction OK
     * @throws ApiError
     */
    public getTransaction({
        companySlug,
        transactionId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        transactionId: number,
    }): CancelablePromise<transaction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/transactions/{transactionId}',
            path: {
                'companySlug': companySlug,
                'transactionId': transactionId,
            },
        });
    }

}

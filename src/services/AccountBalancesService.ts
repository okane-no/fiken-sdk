/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accountBalance } from '../models/accountBalance';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountBalancesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date.
     * An account is a string with either four digits, or four digits, a colon and five digits ("reskontro").
     * Examples:
     * 3020 and 1500:10001
     *
     * @returns accountBalance OK
     * @throws ApiError
     */
    public getAccountBalances({
        companySlug,
        date,
        fromAccount,
        toAccount,
        page,
        pageSize = 25,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        date: string,
        /**
         * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
         */
        fromAccount?: number,
        /**
         * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
         */
        toAccount?: number,
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
    }): CancelablePromise<Array<accountBalance>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/accountBalances',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'fromAccount': fromAccount,
                'toAccount': toAccount,
                'page': page,
                'pageSize': pageSize,
                'date': date,
            },
        });
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @returns accountBalance OK
     * @throws ApiError
     */
    public getAccountBalance({
        companySlug,
        accountCode,
        date,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * Code number of the bookkeeping account to retrieve
         */
        accountCode: string,
        /**
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        date: string,
    }): CancelablePromise<accountBalance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/accountBalances/{accountCode}',
            path: {
                'companySlug': companySlug,
                'accountCode': accountCode,
            },
            query: {
                'date': date,
            },
        });
    }

}

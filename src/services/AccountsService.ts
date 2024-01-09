/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from '../models/account';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves the bookkeeping accounts for the current year
     *
     * @returns account OK
     * @throws ApiError
     */
    public getAccounts({
        companySlug,
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
    }): CancelablePromise<Array<account>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/accounts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'fromAccount': fromAccount,
                'toAccount': toAccount,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Retrieves the specified bookkeping account.
     * An account is a string with either four digits, or four digits, a colon and five digits ("reskontro").
     * Examples:
     * 3020 and 1500:10001
     *
     * @returns account OK
     * @throws ApiError
     */
    public getAccount({
        companySlug,
        accountCode,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * Code number of the bookkeeping account to retrieve for the current year.
         */
        accountCode: string,
    }): CancelablePromise<account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/accounts/{accountCode}',
            path: {
                'companySlug': companySlug,
                'accountCode': accountCode,
            },
        });
    }

}

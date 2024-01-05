/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accountBalance } from '../models/accountBalance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountBalancesService {

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date.
     * An account is a string with either four digits, or four digits, a colon and five digits ("reskontro").
     * Examples:
     * 3020 and 1500:10001
     *
     * @param companySlug Slug of company to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns accountBalance OK
     * @throws ApiError
     */
    public static getAccountBalances(
        companySlug: string,
        date: string,
        fromAccount?: number,
        toAccount?: number,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<accountBalance>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @returns accountBalance OK
     * @throws ApiError
     */
    public static getAccountBalance(
        companySlug: string,
        accountCode: string,
        date: string,
    ): CancelablePromise<accountBalance> {
        return __request(OpenAPI, {
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

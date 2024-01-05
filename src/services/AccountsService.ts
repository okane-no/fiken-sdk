/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from '../models/account';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountsService {

    /**
     * Retrieves the bookkeeping accounts for the current year
     *
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns account OK
     * @throws ApiError
     */
    public static getAccounts(
        companySlug: string,
        fromAccount?: number,
        toAccount?: number,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<account>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     * @returns account OK
     * @throws ApiError
     */
    public static getAccount(
        companySlug: string,
        accountCode: string,
    ): CancelablePromise<account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/accounts/{accountCode}',
            path: {
                'companySlug': companySlug,
                'accountCode': accountCode,
            },
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bankAccountRequest } from '../models/bankAccountRequest';
import type { bankAccountResult } from '../models/bankAccountResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BankAccountsService {

    /**
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     * @returns bankAccountResult OK
     * @throws ApiError
     */
    public static getBankAccounts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        inactive?: boolean,
    ): CancelablePromise<Array<bankAccountResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/bankAccounts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'inactive': inactive,
            },
        });
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account.
     * Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field "foreignService" should only be filled out for accounts of type FOREIGN.
     *
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createBankAccount(
        companySlug: string,
        requestBody: bankAccountRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/bankAccounts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId
     * @returns bankAccountResult OK
     * @throws ApiError
     */
    public static getBankAccount(
        companySlug: string,
        bankAccountId: number,
    ): CancelablePromise<bankAccountResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/bankAccounts/{bankAccountId}',
            path: {
                'companySlug': companySlug,
                'bankAccountId': bankAccountId,
            },
        });
    }

}

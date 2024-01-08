/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bankAccountRequest } from '../models/bankAccountRequest';
import type { bankAccountResult } from '../models/bankAccountResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BankAccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves all bank accounts associated with the company.
     * @returns bankAccountResult OK
     * @throws ApiError
     */
    public getBankAccounts({
        companySlug,
        page,
        pageSize = 25,
        inactive,
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
         * Return all active bank accounts (false) or all inactive bank accounts (true).
         */
        inactive?: boolean,
    }): CancelablePromise<Array<bankAccountResult>> {
        return this.httpRequest.request({
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
     * @returns string Created
     * @throws ApiError
     */
    public createBankAccount({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: bankAccountRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns bankAccountResult OK
     * @throws ApiError
     */
    public getBankAccount({
        companySlug,
        bankAccountId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        bankAccountId: number,
    }): CancelablePromise<bankAccountResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/bankAccounts/{bankAccountId}',
            path: {
                'companySlug': companySlug,
                'bankAccountId': bankAccountId,
            },
        });
    }

}

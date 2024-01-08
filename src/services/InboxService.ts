/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { inboxResult } from '../models/inboxResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InboxService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns the contents of the inbox for given company.
     * @returns inboxResult OK
     * @throws ApiError
     */
    public getInbox({
        companySlug,
        page,
        pageSize = 25,
        sortBy = 'createdDate desc',
        status = 'all',
        name,
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
         * Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
         */
        sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc',
        status?: 'all' | 'unused' | 'used',
        /**
         * Filter documents based on their name, case-insensitive substring match.
         */
        name?: string,
    }): CancelablePromise<Array<inboxResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/inbox',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'status': status,
                'name': name,
            },
        });
    }

    /**
     * Upload a document to the inbox
     * @returns string Created
     * @throws ApiError
     */
    public createInboxDocument({
        companySlug,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        formData: {
            /**
             * The name of the inbox document, usually the same as the filename
             */
            name?: string;
            /**
             * The filename of the file uploaded
             */
            filename?: string;
            /**
             * Additional description of the inbox document
             */
            description?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/inbox',
            path: {
                'companySlug': companySlug,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns the inbox document with specified id
     * @returns inboxResult OK
     * @throws ApiError
     */
    public getInboxDocument({
        companySlug,
        inboxDocumentId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        inboxDocumentId: number,
    }): CancelablePromise<inboxResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/inbox/{inboxDocumentId}',
            path: {
                'companySlug': companySlug,
                'inboxDocumentId': inboxDocumentId,
            },
        });
    }

}

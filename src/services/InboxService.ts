/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { inboxResult } from '../models/inboxResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InboxService {

    /**
     * Returns the contents of the inbox for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param status
     * @param name Filter documents based on their name, case-insensitive substring match.
     * @returns inboxResult OK
     * @throws ApiError
     */
    public static getInbox(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        sortBy: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' = 'createdDate desc',
        status: 'all' | 'unused' | 'used' = 'all',
        name?: string,
    ): CancelablePromise<Array<inboxResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static createInboxDocument(
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId
     * @returns inboxResult OK
     * @throws ApiError
     */
    public static getInboxDocument(
        companySlug: string,
        inboxDocumentId: number,
    ): CancelablePromise<inboxResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/inbox/{inboxDocumentId}',
            path: {
                'companySlug': companySlug,
                'inboxDocumentId': inboxDocumentId,
            },
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { generalJournalEntryRequest } from '../models/generalJournalEntryRequest';
import type { journalEntry } from '../models/journalEntry';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class JournalEntriesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @returns journalEntry OK
     * @throws ApiError
     */
    public getJournalEntries({
        companySlug,
        page,
        pageSize = 25,
        date,
        dateLe,
        dateLt,
        dateGe,
        dateGt,
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
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        date?: string,
        /**
         * Filter based on date less than or equal to parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        dateLe?: string,
        /**
         * Filter based on date strictly less than parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        dateLt?: string,
        /**
         * Filter based on date greater than or equal to parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        dateGe?: string,
        /**
         * Filter based on date strictly greater than parameter value
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        dateGt?: string,
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
    }): CancelablePromise<Array<journalEntry>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/journalEntries',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'date': date,
                'dateLe': dateLe,
                'dateLt': dateLt,
                'dateGe': dateGe,
                'dateGt': dateGt,
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
     * Creates a new general journal entry (fri postering).
     * @returns string Created
     * @throws ApiError
     */
    public createGeneralJournalEntry({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: generalJournalEntryRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/generalJournalEntries',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns all journal entries within a given company's Journal Entry Service
     * @returns journalEntry OK
     * @throws ApiError
     */
    public getJournalEntry({
        companySlug,
        journalEntryId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        journalEntryId: number,
    }): CancelablePromise<journalEntry> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/journalEntries/{journalEntryId}',
            path: {
                'companySlug': companySlug,
                'journalEntryId': journalEntryId,
            },
        });
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @returns attachment OK
     * @throws ApiError
     */
    public getJournalEntryAttachments({
        companySlug,
        journalEntryId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        journalEntryId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/journalEntries/{journalEntryId}/attachments',
            path: {
                'companySlug': companySlug,
                'journalEntryId': journalEntryId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToJournalEntry({
        companySlug,
        journalEntryId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        journalEntryId: number,
        formData?: {
            /**
             * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/journalEntries/{journalEntryId}/attachments',
            path: {
                'companySlug': companySlug,
                'journalEntryId': journalEntryId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

}

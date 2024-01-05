/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { generalJournalEntryRequest } from '../models/generalJournalEntryRequest';
import type { journalEntry } from '../models/journalEntry';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class JournalEntriesService {

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param date Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param dateLe Filter based on date less than or equal to parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param dateLt Filter based on date strictly less than parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param dateGe Filter based on date greater than or equal to parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param dateGt Filter based on date strictly greater than parameter value
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @returns journalEntry OK
     * @throws ApiError
     */
    public static getJournalEntries(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        date?: string,
        dateLe?: string,
        dateLt?: string,
        dateGe?: string,
        dateGt?: string,
        lastModified?: string,
        lastModifiedLe?: string,
        lastModifiedLt?: string,
        lastModifiedGe?: string,
        lastModifiedGt?: string,
        createdDate?: string,
        createdDateLe?: string,
        createdDateLt?: string,
        createdDateGe?: string,
        createdDateGt?: string,
    ): CancelablePromise<Array<journalEntry>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createGeneralJournalEntry(
        companySlug: string,
        requestBody: generalJournalEntryRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId
     * @returns journalEntry OK
     * @throws ApiError
     */
    public static getJournalEntry(
        companySlug: string,
        journalEntryId: number,
    ): CancelablePromise<journalEntry> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId
     * @returns attachment OK
     * @throws ApiError
     */
    public static getJournalEntryAttachments(
        companySlug: string,
        journalEntryId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToJournalEntry(
        companySlug: string,
        journalEntryId: number,
        formData?: {
            /**
             * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            file?: Blob;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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

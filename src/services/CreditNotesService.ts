/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { counter } from '../models/counter';
import type { creditNoteResult } from '../models/creditNoteResult';
import type { fullCreditNoteRequest } from '../models/fullCreditNoteRequest';
import type { invoiceishDraftRequest } from '../models/invoiceishDraftRequest';
import type { invoiceishDraftResult } from '../models/invoiceishDraftResult';
import type { partialCreditNoteRequest } from '../models/partialCreditNoteRequest';
import type { sendCreditNoteRequest } from '../models/sendCreditNoteRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CreditNotesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all credit notes for given company
     * @returns creditNoteResult OK
     * @throws ApiError
     */
    public getCreditNotes({
        companySlug,
        page,
        pageSize = 25,
        issueDate,
        issueDateLe,
        issueDateLt,
        issueDateGe,
        issueDateGt,
        customerId,
        settled,
        creditNoteDraftUuid,
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
        issueDate?: string,
        /**
         * Filter based on date less than or equal to parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        issueDateLe?: string,
        /**
         * Filter based on date strictly less than parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        issueDateLt?: string,
        /**
         * Filter based on date greater than or equal to parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        issueDateGe?: string,
        /**
         * Filter based on date strictly greater than parameter value
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        issueDateGt?: string,
        /**
         * Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call.
         *
         */
        customerId?: number,
        /**
         * When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes
         * that have not been fully settled.
         *
         */
        settled?: boolean,
        /**
         * Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to "uavhengig kreditnotaer".
         */
        creditNoteDraftUuid?: string,
    }): CancelablePromise<Array<creditNoteResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'issueDate': issueDate,
                'issueDateLe': issueDateLe,
                'issueDateLt': issueDateLt,
                'issueDateGe': issueDateGe,
                'issueDateGt': issueDateGt,
                'customerId': customerId,
                'settled': settled,
                'creditNoteDraftUuid': creditNoteDraftUuid,
            },
        });
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @returns string Created
     * @throws ApiError
     */
    public createFullCreditNote({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: fullCreditNoteRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/full',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Creates a new credit note that doesn't fully cover the total amount of the associated invoice.
     * @returns string Created
     * @throws ApiError
     */
    public createPartialCreditNote({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: partialCreditNoteRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/partial',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns credit note with specified id.
     * @returns creditNoteResult OK
     * @throws ApiError
     */
    public getCreditNote({
        companySlug,
        creditNoteId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The creditNoteId (primary key of the returned object) is returned as the first field in the GET all
         * credit notes call; not to be confused with creditNoteNumber
         *
         */
        creditNoteId: string,
    }): CancelablePromise<creditNoteResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/{creditNoteId}',
            path: {
                'companySlug': companySlug,
                'creditNoteId': creditNoteId,
            },
        });
    }

    /**
     * Sends the specified document
     * @returns any Sent
     * @throws ApiError
     */
    public sendCreditNote({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: sendCreditNoteRequest,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/send',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieves the counter for credit notes if it has been created
     *
     * @returns counter OK
     * @throws ApiError
     */
    public getCreditNoteCounter({
        companySlug,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
    }): CancelablePromise<counter> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @returns any Created
     * @throws ApiError
     */
    public createCreditNoteCounter({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody?: counter,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/counter',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns all credit note drafts for given company.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getCreditNoteDrafts({
        companySlug,
        page,
        pageSize = 25,
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
    }): CancelablePromise<Array<invoiceishDraftResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/drafts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an "uavhengig kreditnota" in Fiken.
     * @returns string Created
     * @throws ApiError
     */
    public createCreditNoteDraft({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/drafts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns credit note draft with specified id.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getCreditNoteDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<invoiceishDraftResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Updates credit note draft with provided id.
     *
     * @returns string Created
     * @throws ApiError
     */
    public updateCreditNoteDraft({
        companySlug,
        draftId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
        requestBody: invoiceishDraftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Delete credit note draft with specified id.
     * @returns void
     * @throws ApiError
     */
    public deleteCreditNoteDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Returns all attachments for specified draft.
     * @returns attachment OK
     * @throws ApiError
     */
    public getCreditNoteDraftAttachments({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToCreditNoteDraft({
        companySlug,
        draftId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
        formData?: {
            /**
             * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            /**
             * Not required.
             */
            comment?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Creates a credit note from an already created draft.
     * @returns string Created
     * @throws ApiError
     */
    public createCreditNoteFromDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/creditNotes/drafts/{draftId}/createCreditNote',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

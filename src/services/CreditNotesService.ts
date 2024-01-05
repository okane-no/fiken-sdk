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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CreditNotesService {

    /**
     * Returns all credit notes for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param issueDate Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param issueDateLe Filter based on date less than or equal to parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param issueDateLt Filter based on date strictly less than parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param issueDateGe Filter based on date greater than or equal to parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param issueDateGt Filter based on date strictly greater than parameter value
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param customerId Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call.
     *
     * @param settled When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes
     * that have not been fully settled.
     *
     * @param creditNoteDraftUuid Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to "uavhengig kreditnotaer".
     * @returns creditNoteResult OK
     * @throws ApiError
     */
    public static getCreditNotes(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        issueDate?: string,
        issueDateLe?: string,
        issueDateLt?: string,
        issueDateGe?: string,
        issueDateGt?: string,
        customerId?: number,
        settled?: boolean,
        creditNoteDraftUuid?: string,
    ): CancelablePromise<Array<creditNoteResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createFullCreditNote(
        companySlug: string,
        requestBody: fullCreditNoteRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createPartialCreditNote(
        companySlug: string,
        requestBody: partialCreditNoteRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param creditNoteId The creditNoteId (primary key of the returned object) is returned as the first field in the GET all
     * credit notes call; not to be confused with creditNoteNumber
     *
     * @returns creditNoteResult OK
     * @throws ApiError
     */
    public static getCreditNote(
        companySlug: string,
        creditNoteId: string,
    ): CancelablePromise<creditNoteResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Sent
     * @throws ApiError
     */
    public static sendCreditNote(
        companySlug: string,
        requestBody: sendCreditNoteRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @returns counter OK
     * @throws ApiError
     */
    public static getCreditNoteCounter(
        companySlug: string,
    ): CancelablePromise<counter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/creditNotes/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static createCreditNoteCounter(
        companySlug: string,
        requestBody?: counter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getCreditNoteDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<invoiceishDraftResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createCreditNoteDraft(
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getCreditNoteDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<invoiceishDraftResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updateCreditNoteDraft(
        companySlug: string,
        draftId: number,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteCreditNoteDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns attachment OK
     * @throws ApiError
     */
    public static getCreditNoteDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToCreditNoteDraft(
        companySlug: string,
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createCreditNoteFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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

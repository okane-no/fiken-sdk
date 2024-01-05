/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { counter } from '../models/counter';
import type { invoiceishDraftRequest } from '../models/invoiceishDraftRequest';
import type { invoiceishDraftResult } from '../models/invoiceishDraftResult';
import type { orderConfirmation } from '../models/orderConfirmation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderConfirmationsService {

    /**
     * Returns all order confirmations for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns orderConfirmation OK
     * @throws ApiError
     */
    public static getOrderConfirmations(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<orderConfirmation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations',
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
     * Returns order confirmation with specified id.
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all
     * order confirmations call
     *
     * @returns orderConfirmation OK
     * @throws ApiError
     */
    public static getOrderConfirmation(
        companySlug: string,
        confirmationId: string,
    ): CancelablePromise<orderConfirmation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/{confirmationId}',
            path: {
                'companySlug': companySlug,
                'confirmationId': confirmationId,
            },
        });
    }

    /**
     * Retrieves the counter for order confirmations if it has been created
     *
     * @param companySlug Slug of company to retrieve
     * @returns counter OK
     * @throws ApiError
     */
    public static getOrderConfirmationCounter(
        companySlug: string,
    ): CancelablePromise<counter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static createOrderConfirmationCounter(
        companySlug: string,
        requestBody?: counter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/orderConfirmations/counter',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all
     * order confirmations call
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createInvoiceDraftFromOrderConfirmation(
        companySlug: string,
        confirmationId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/orderConfirmations/{confirmationId}/createInvoiceDraft',
            path: {
                'companySlug': companySlug,
                'confirmationId': confirmationId,
            },
            responseHeader: 'Location',
        });
    }

    /**
     * Returns all order confirmation drafts for given company.
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
    public static getOrderConfirmationDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<invoiceishDraftResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/drafts',
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
     * Creates an order confirmation draft.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createOrderConfirmationDraft(
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/orderConfirmations/drafts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getOrderConfirmationDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<invoiceishDraftResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Updates order confirmation draft with provided id.
     *
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updateOrderConfirmationDraft(
        companySlug: string,
        draftId: number,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}',
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
     * Delete order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteOrderConfirmationDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}',
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
    public static getOrderConfirmationDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToOrderConfirmationDraft(
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
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}/attachments',
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
     * Creates an order confirmation from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createOrderConfirmationFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}/createOrderConfirmation',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

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
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderConfirmationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all order confirmations for given company
     * @returns orderConfirmation OK
     * @throws ApiError
     */
    public getOrderConfirmations({
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
    }): CancelablePromise<Array<orderConfirmation>> {
        return this.httpRequest.request({
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
     * @returns orderConfirmation OK
     * @throws ApiError
     */
    public getOrderConfirmation({
        companySlug,
        confirmationId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The confirmationId (primary key of the returned object) is returned as the first field in the GET all
         * order confirmations call
         *
         */
        confirmationId: string,
    }): CancelablePromise<orderConfirmation> {
        return this.httpRequest.request({
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
     * @returns counter OK
     * @throws ApiError
     */
    public getOrderConfirmationCounter({
        companySlug,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
    }): CancelablePromise<counter> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/orderConfirmations/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @returns any Created
     * @throws ApiError
     */
    public createOrderConfirmationCounter({
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
     * @returns string Created
     * @throws ApiError
     */
    public createInvoiceDraftFromOrderConfirmation({
        companySlug,
        confirmationId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The confirmationId (primary key of the returned object) is returned as the first field in the GET all
         * order confirmations call
         *
         */
        confirmationId: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getOrderConfirmationDrafts({
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
     * @returns string Created
     * @throws ApiError
     */
    public createOrderConfirmationDraft({
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
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getOrderConfirmationDraft({
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
     * @returns string Created
     * @throws ApiError
     */
    public updateOrderConfirmationDraft({
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
     * @returns void
     * @throws ApiError
     */
    public deleteOrderConfirmationDraft({
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
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}',
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
    public getOrderConfirmationDraftAttachments({
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
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToOrderConfirmationDraft({
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
     * @returns string Created
     * @throws ApiError
     */
    public createOrderConfirmationFromDraft({
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
            url: '/companies/{companySlug}/orderConfirmations/drafts/{draftId}/createOrderConfirmation',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

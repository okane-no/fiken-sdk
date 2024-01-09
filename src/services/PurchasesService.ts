/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { draftRequest } from '../models/draftRequest';
import type { draftResult } from '../models/draftResult';
import type { payment } from '../models/payment';
import type { purchaseRequest } from '../models/purchaseRequest';
import type { purchaseResult } from '../models/purchaseResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PurchasesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all purchases for given company
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public getPurchases({
        companySlug,
        page,
        pageSize = 25,
        date,
        dateLe,
        dateLt,
        dateGe,
        dateGt,
        sortBy = 'date asc',
        paid,
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
         * Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
         */
        sortBy?: 'date asc' | 'date desc',
        /**
         * When set to true, returns only purchases that have been paid. Otherwise false returns all purchases
         * that have not been fully settled.
         *
         */
        paid?: boolean,
    }): CancelablePromise<Array<purchaseResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases',
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
                'sortBy': sortBy,
                'paid': paid,
            },
        });
    }

    /**
     * Creates a new purchase.
     * @returns string Created
     * @throws ApiError
     */
    public createPurchase({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: purchaseRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/purchases',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns purchase with specified id.
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public getPurchase({
        companySlug,
        purchaseId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
    }): CancelablePromise<purchaseResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/{purchaseId}',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
        });
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the "deleted" property is set to true.
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public deletePurchase({
        companySlug,
        purchaseId,
        description,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
        /**
         * Required description for deleting the purchase
         */
        description: string,
    }): CancelablePromise<purchaseResult> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/companies/{companySlug}/purchases/{purchaseId}/delete',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
            query: {
                'description': description,
            },
        });
    }

    /**
     * Returns all attachments for specified purchase.
     * @returns attachment OK
     * @throws ApiError
     */
    public getPurchaseAttachments({
        companySlug,
        purchaseId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/{purchaseId}/attachments',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to a Purchase
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToPurchase({
        companySlug,
        purchaseId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
        formData?: {
            /**
             * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            /**
             * True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
             */
            attachToPayment?: boolean;
            /**
             * True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
             */
            attachToSale?: boolean;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/purchases/{purchaseId}/attachments',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns all purchases for given company
     * @returns payment OK
     * @throws ApiError
     */
    public getPurchasePayments({
        companySlug,
        purchaseId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
    }): CancelablePromise<Array<payment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/{purchaseId}/payments',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
        });
    }

    /**
     * Creates a new payment for a purchase
     * @returns string Created
     * @throws ApiError
     */
    public createPurchasePayment({
        companySlug,
        purchaseId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
        requestBody: payment,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/purchases/{purchaseId}/payments',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns given payment for specified purchase
     * @returns payment OK
     * @throws ApiError
     */
    public getPurchasePayment({
        companySlug,
        purchaseId,
        paymentId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        purchaseId: number,
        paymentId: number,
    }): CancelablePromise<payment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/{purchaseId}/payments/{paymentId}',
            path: {
                'companySlug': companySlug,
                'purchaseId': purchaseId,
                'paymentId': paymentId,
            },
        });
    }

    /**
     * Returns all purchase drafts for given company.
     * @returns draftResult OK
     * @throws ApiError
     */
    public getPurchaseDrafts({
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
    }): CancelablePromise<Array<draftResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/drafts',
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
     * Creates a purchase draft.
     * @returns string Created
     * @throws ApiError
     */
    public createPurchaseDraft({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: draftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/purchases/drafts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns draft with specified id.
     * @returns draftResult OK
     * @throws ApiError
     */
    public getPurchaseDraft({
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
    }): CancelablePromise<draftResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/purchases/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Updates draft with provided id.
     *
     * @returns string Created
     * @throws ApiError
     */
    public updatePurchaseDraft({
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
        requestBody: draftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/companies/{companySlug}/purchases/drafts/{draftId}',
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
     * Delete draft with specified id.
     * @returns void
     * @throws ApiError
     */
    public deletePurchaseDraft({
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
            url: '/companies/{companySlug}/purchases/drafts/{draftId}',
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
    public getPurchaseDraftAttachments({
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
            url: '/companies/{companySlug}/purchases/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to a draft
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToPurchaseDraft({
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
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/purchases/drafts/{draftId}/attachments',
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
     * Creates a purchase from an already created draft.
     * @returns string Created
     * @throws ApiError
     */
    public createPurchaseFromDraft({
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
            url: '/companies/{companySlug}/purchases/drafts/{draftId}/createPurchase',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

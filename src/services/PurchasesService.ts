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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PurchasesService {

    /**
     * Returns all purchases for given company
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
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param paid When set to true, returns only purchases that have been paid. Otherwise false returns all purchases
     * that have not been fully settled.
     *
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public static getPurchases(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        date?: string,
        dateLe?: string,
        dateLt?: string,
        dateGe?: string,
        dateGt?: string,
        sortBy: 'date asc' | 'date desc' = 'date asc',
        paid?: boolean,
    ): CancelablePromise<Array<purchaseResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createPurchase(
        companySlug: string,
        requestBody: purchaseRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public static getPurchase(
        companySlug: string,
        purchaseId: number,
    ): CancelablePromise<purchaseResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @param description Required description for deleting the purchase
     * @returns purchaseResult OK
     * @throws ApiError
     */
    public static deletePurchase(
        companySlug: string,
        purchaseId: number,
        description: string,
    ): CancelablePromise<purchaseResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @returns attachment OK
     * @throws ApiError
     */
    public static getPurchaseAttachments(
        companySlug: string,
        purchaseId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToPurchase(
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @returns payment OK
     * @throws ApiError
     */
    public static getPurchasePayments(
        companySlug: string,
        purchaseId: number,
    ): CancelablePromise<Array<payment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createPurchasePayment(
        companySlug: string,
        purchaseId: number,
        requestBody: payment,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param purchaseId
     * @param paymentId
     * @returns payment OK
     * @throws ApiError
     */
    public static getPurchasePayment(
        companySlug: string,
        purchaseId: number,
        paymentId: number,
    ): CancelablePromise<payment> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns draftResult OK
     * @throws ApiError
     */
    public static getPurchaseDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<draftResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createPurchaseDraft(
        companySlug: string,
        requestBody: draftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns draftResult OK
     * @throws ApiError
     */
    public static getPurchaseDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<draftResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updatePurchaseDraft(
        companySlug: string,
        draftId: number,
        requestBody: draftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns void
     * @throws ApiError
     */
    public static deletePurchaseDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns attachment OK
     * @throws ApiError
     */
    public static getPurchaseDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToPurchaseDraft(
        companySlug: string,
        draftId: number,
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createPurchaseFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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

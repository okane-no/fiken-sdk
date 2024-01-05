/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { draftRequest } from '../models/draftRequest';
import type { draftResult } from '../models/draftResult';
import type { payment } from '../models/payment';
import type { saleRequest } from '../models/saleRequest';
import type { saleResult } from '../models/saleResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SalesService {

    /**
     * Returns all sales for given company
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
     * @param saleNumber Find all results with the sale number equal to the specified parameter.
     * @param settled When set to true, returns only sales that have been settled. Otherwise false returns all sales
     * that have not been fully settled.
     *
     * @returns saleResult OK
     * @throws ApiError
     */
    public static getSales(
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
        saleNumber?: string,
        settled?: boolean,
    ): CancelablePromise<Array<saleResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales',
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
                'saleNumber': saleNumber,
                'settled': settled,
            },
        });
    }

    /**
     * Creates a new sale. This corresponds to "Annet salg" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createSale(
        companySlug: string,
        requestBody: saleRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/sales',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns sale with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @returns saleResult OK
     * @throws ApiError
     */
    public static getSale(
        companySlug: string,
        saleId: number,
    ): CancelablePromise<saleResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/{saleId}',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
        });
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with "sett til oppgjort uten betaling" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @param settledDate Date that the sale is settled
     * @returns saleResult OK
     * @throws ApiError
     */
    public static settledSale(
        companySlug: string,
        saleId: number,
        settledDate: string,
    ): CancelablePromise<saleResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/companies/{companySlug}/sales/{saleId}/settled',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
            query: {
                'settledDate': settledDate,
            },
        });
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the "deleted" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @param description Required description for deleting the sale
     * @returns saleResult OK
     * @throws ApiError
     */
    public static deleteSale(
        companySlug: string,
        saleId: number,
        description: string,
    ): CancelablePromise<saleResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/companies/{companySlug}/sales/{saleId}/delete',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
            query: {
                'description': description,
            },
        });
    }

    /**
     * Returns all attachments for specified sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @returns attachment OK
     * @throws ApiError
     */
    public static getSaleAttachments(
        companySlug: string,
        saleId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/{saleId}/attachments',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to a Sale
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToSale(
        companySlug: string,
        saleId: number,
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
            url: '/companies/{companySlug}/sales/{saleId}/attachments',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns all payments for given sale
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @returns payment OK
     * @throws ApiError
     */
    public static getSalePayments(
        companySlug: string,
        saleId: number,
    ): CancelablePromise<Array<payment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/{saleId}/payments',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
        });
    }

    /**
     * Creates a new payment for a given sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createSalePayment(
        companySlug: string,
        saleId: number,
        requestBody: payment,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/sales/{saleId}/payments',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns payment with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId
     * @param paymentId
     * @returns payment OK
     * @throws ApiError
     */
    public static getSalePayment(
        companySlug: string,
        saleId: number,
        paymentId: number,
    ): CancelablePromise<payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/{saleId}/payments/{paymentId}',
            path: {
                'companySlug': companySlug,
                'saleId': saleId,
                'paymentId': paymentId,
            },
        });
    }

    /**
     * Returns all sale drafts for given company.
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
    public static getSaleDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<draftResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/drafts',
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
     * Creates a sale draft.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createSaleDraft(
        companySlug: string,
        requestBody: draftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/sales/drafts',
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
    public static getSaleDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<draftResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/drafts/{draftId}',
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
    public static updateSaleDraft(
        companySlug: string,
        draftId: number,
        requestBody: draftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/companies/{companySlug}/sales/drafts/{draftId}',
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
    public static deleteSaleDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/companies/{companySlug}/sales/drafts/{draftId}',
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
    public static getSaleDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/sales/drafts/{draftId}/attachments',
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
    public static addAttachmentToSaleDraft(
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
            url: '/companies/{companySlug}/sales/drafts/{draftId}/attachments',
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
     * Creates a sale from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createSaleFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/companies/{companySlug}/sales/drafts/{draftId}/createSale',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

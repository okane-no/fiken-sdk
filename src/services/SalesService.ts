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
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SalesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all sales for given company
     * @returns saleResult OK
     * @throws ApiError
     */
    public getSales({
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
        saleNumber,
        settled,
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
         * Find all results with the sale number equal to the specified parameter.
         */
        saleNumber?: string,
        /**
         * When set to true, returns only sales that have been settled. Otherwise false returns all sales
         * that have not been fully settled.
         *
         */
        settled?: boolean,
    }): CancelablePromise<Array<saleResult>> {
        return this.httpRequest.request({
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
     * @returns string Created
     * @throws ApiError
     */
    public createSale({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: saleRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns saleResult OK
     * @throws ApiError
     */
    public getSale({
        companySlug,
        saleId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
    }): CancelablePromise<saleResult> {
        return this.httpRequest.request({
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
     * @returns saleResult OK
     * @throws ApiError
     */
    public settledSale({
        companySlug,
        saleId,
        settledDate,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
        /**
         * Date that the sale is settled
         */
        settledDate: string,
    }): CancelablePromise<saleResult> {
        return this.httpRequest.request({
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
     * @returns saleResult OK
     * @throws ApiError
     */
    public deleteSale({
        companySlug,
        saleId,
        description,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
        /**
         * Required description for deleting the sale
         */
        description: string,
    }): CancelablePromise<saleResult> {
        return this.httpRequest.request({
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
     * @returns attachment OK
     * @throws ApiError
     */
    public getSaleAttachments({
        companySlug,
        saleId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
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
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToSale({
        companySlug,
        saleId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
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
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns payment OK
     * @throws ApiError
     */
    public getSalePayments({
        companySlug,
        saleId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
    }): CancelablePromise<Array<payment>> {
        return this.httpRequest.request({
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
     * @returns string Created
     * @throws ApiError
     */
    public createSalePayment({
        companySlug,
        saleId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
        requestBody: payment,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
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
     * @returns payment OK
     * @throws ApiError
     */
    public getSalePayment({
        companySlug,
        saleId,
        paymentId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        saleId: number,
        paymentId: number,
    }): CancelablePromise<payment> {
        return this.httpRequest.request({
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
     * @returns draftResult OK
     * @throws ApiError
     */
    public getSaleDrafts({
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
     * @returns string Created
     * @throws ApiError
     */
    public createSaleDraft({
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
     * @returns draftResult OK
     * @throws ApiError
     */
    public getSaleDraft({
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
     * @returns string Created
     * @throws ApiError
     */
    public updateSaleDraft({
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
     * @returns void
     * @throws ApiError
     */
    public deleteSaleDraft({
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
            url: '/companies/{companySlug}/sales/drafts/{draftId}',
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
    public getSaleDraftAttachments({
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
            url: '/companies/{companySlug}/sales/drafts/{draftId}/attachments',
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
    public addAttachmentToSaleDraft({
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
     * @returns string Created
     * @throws ApiError
     */
    public createSaleFromDraft({
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
            url: '/companies/{companySlug}/sales/drafts/{draftId}/createSale',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { counter } from '../models/counter';
import type { invoiceishDraftRequest } from '../models/invoiceishDraftRequest';
import type { invoiceishDraftResult } from '../models/invoiceishDraftResult';
import type { invoiceRequest } from '../models/invoiceRequest';
import type { invoiceResult } from '../models/invoiceResult';
import type { sendInvoiceRequest } from '../models/sendInvoiceRequest';
import type { updateInvoiceRequest } from '../models/updateInvoiceRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InvoicesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     * @returns invoiceResult OK
     * @throws ApiError
     */
    public getInvoices({
        companySlug,
        page,
        pageSize = 25,
        issueDate,
        issueDateLe,
        issueDateLt,
        issueDateGe,
        issueDateGt,
        lastModified,
        lastModifiedLe,
        lastModifiedLt,
        lastModifiedGe,
        lastModifiedGt,
        customerId,
        settled,
        orderReference,
        invoiceDraftUuid,
        invoiceNumber,
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
         * Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call.
         *
         */
        customerId?: number,
        /**
         * When set to true, returns only invoices that have been settled. Otherwise false returns all invoices
         * that have not been fully settled.
         *
         */
        settled?: boolean,
        /**
         * Filter based on order reference for a given invoice
         */
        orderReference?: string,
        /**
         * Filter based on the UUID of the invoice draft that was used to create a given invoice
         */
        invoiceDraftUuid?: string,
        invoiceNumber?: string,
    }): CancelablePromise<Array<invoiceResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/invoices',
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
                'lastModified': lastModified,
                'lastModifiedLe': lastModifiedLe,
                'lastModifiedLt': lastModifiedLt,
                'lastModifiedGe': lastModifiedGe,
                'lastModifiedGt': lastModifiedGt,
                'customerId': customerId,
                'settled': settled,
                'orderReference': orderReference,
                'invoiceDraftUuid': invoiceDraftUuid,
                'invoiceNumber': invoiceNumber,
            },
        });
    }

    /**
     * Creates an invoice. This corresponds to "Ny faktura" in Fiken.
     * There are two types of invoice lines that can be added to an invoice line: product line or free text line.
     * Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice.
     * It is however also possible to override the unit amount by sending information in both fields "productId" and "unitAmount".
     * An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line.
     * In this case all information regarding the price and VAT of the product or service to be invoiced must be provided.
     *
     * @returns string Created
     * @throws ApiError
     */
    public createInvoice({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: invoiceRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/invoices',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns invoice with specified id.
     * @returns invoiceResult OK
     * @throws ApiError
     */
    public getInvoice({
        companySlug,
        invoiceId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The invoiceId (primary key of the returned object) is returned in the GET all
         * invoices call; not to be confused with invoiceNumber
         *
         */
        invoiceId: number,
    }): CancelablePromise<invoiceResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/invoices/{invoiceId}',
            path: {
                'companySlug': companySlug,
                'invoiceId': invoiceId,
            },
        });
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice
     * as well as if the invoice was sent manually, outside of Fiken.
     *
     * @returns string OK
     * @throws ApiError
     */
    public updateInvoice({
        companySlug,
        invoiceId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The invoiceId (primary key of the returned object) is returned in the GET all
         * invoices call; not to be confused with invoiceNumber
         *
         */
        invoiceId: number,
        requestBody: updateInvoiceRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/companies/{companySlug}/invoices/{invoiceId}',
            path: {
                'companySlug': companySlug,
                'invoiceId': invoiceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns all attachments for a given Invoice
     * @returns attachment OK
     * @throws ApiError
     */
    public getInvoiceAttachments({
        companySlug,
        invoiceId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The invoiceId (primary key of the returned object) is returned in the GET all
         * invoices call; not to be confused with invoiceNumber
         *
         */
        invoiceId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/invoices/{invoiceId}/attachments',
            path: {
                'companySlug': companySlug,
                'invoiceId': invoiceId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToInvoice({
        companySlug,
        invoiceId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The invoiceId (primary key of the returned object) is returned in the GET all
         * invoices call; not to be confused with invoiceNumber
         *
         */
        invoiceId: number,
        formData?: {
            /**
             * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/invoices/{invoiceId}/attachments',
            path: {
                'companySlug': companySlug,
                'invoiceId': invoiceId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Sends the specified document
     * @returns any Sent
     * @throws ApiError
     */
    public sendInvoice({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: sendInvoiceRequest,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/invoices/send',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieves the counter for invoices if it has been created
     *
     * @returns counter OK
     * @throws ApiError
     */
    public getInvoiceCounter({
        companySlug,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
    }): CancelablePromise<counter> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/invoices/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @returns any Created
     * @throws ApiError
     */
    public createInvoiceCounter({
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
            url: '/companies/{companySlug}/invoices/counter',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns all invoice drafts for given company.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getInvoiceDrafts({
        companySlug,
        page,
        pageSize = 25,
        orderReference,
        uuid,
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
         * Filter based on order reference for a given invoice draft
         */
        orderReference?: string,
        /**
         * Filter based on the UUID of the draft.
         */
        uuid?: string,
    }): CancelablePromise<Array<invoiceishDraftResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/invoices/drafts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'orderReference': orderReference,
                'uuid': uuid,
            },
        });
    }

    /**
     * Creates an invoice draft.
     * @returns string Created
     * @throws ApiError
     */
    public createInvoiceDraft({
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
            url: '/companies/{companySlug}/invoices/drafts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns invoice draft with specified id.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getInvoiceDraft({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Updates invoice draft with provided id.
     *
     * @returns string Created
     * @throws ApiError
     */
    public updateInvoiceDraft({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}',
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
     * Delete invoice draft with specified id.
     * @returns void
     * @throws ApiError
     */
    public deleteInvoiceDraft({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}',
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
    public getInvoiceDraftAttachments({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToInvoiceDraft({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}/attachments',
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
     * Creates an invoice from an already created draft.
     * @returns string Created
     * @throws ApiError
     */
    public createInvoiceFromDraft({
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
            url: '/companies/{companySlug}/invoices/drafts/{draftId}/createInvoice',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}

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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvoicesService {

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
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
     * @param customerId Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call.
     *
     * @param settled When set to true, returns only invoices that have been settled. Otherwise false returns all invoices
     * that have not been fully settled.
     *
     * @param orderReference Filter based on order reference for a given invoice
     * @param invoiceDraftUuid Filter based on the UUID of the invoice draft that was used to create a given invoice
     * @param invoiceNumber
     * @returns invoiceResult OK
     * @throws ApiError
     */
    public static getInvoices(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        issueDate?: string,
        issueDateLe?: string,
        issueDateLt?: string,
        issueDateGe?: string,
        issueDateGt?: string,
        lastModified?: string,
        lastModifiedLe?: string,
        lastModifiedLt?: string,
        lastModifiedGe?: string,
        lastModifiedGt?: string,
        customerId?: number,
        settled?: boolean,
        orderReference?: string,
        invoiceDraftUuid?: string,
        invoiceNumber?: string,
    ): CancelablePromise<Array<invoiceResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createInvoice(
        companySlug: string,
        requestBody: invoiceRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all
     * invoices call; not to be confused with invoiceNumber
     *
     * @returns invoiceResult OK
     * @throws ApiError
     */
    public static getInvoice(
        companySlug: string,
        invoiceId: number,
    ): CancelablePromise<invoiceResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all
     * invoices call; not to be confused with invoiceNumber
     *
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static updateInvoice(
        companySlug: string,
        invoiceId: number,
        requestBody: updateInvoiceRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all
     * invoices call; not to be confused with invoiceNumber
     *
     * @returns attachment OK
     * @throws ApiError
     */
    public static getInvoiceAttachments(
        companySlug: string,
        invoiceId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all
     * invoices call; not to be confused with invoiceNumber
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToInvoice(
        companySlug: string,
        invoiceId: number,
        formData?: {
            /**
             * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            file?: Blob;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Sent
     * @throws ApiError
     */
    public static sendInvoice(
        companySlug: string,
        requestBody: sendInvoiceRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @returns counter OK
     * @throws ApiError
     */
    public static getInvoiceCounter(
        companySlug: string,
    ): CancelablePromise<counter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/invoices/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static createInvoiceCounter(
        companySlug: string,
        requestBody?: counter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param orderReference Filter based on order reference for a given invoice draft
     * @param uuid Filter based on the UUID of the draft.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getInvoiceDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        orderReference?: string,
        uuid?: string,
    ): CancelablePromise<Array<invoiceishDraftResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createInvoiceDraft(
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getInvoiceDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<invoiceishDraftResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updateInvoiceDraft(
        companySlug: string,
        draftId: number,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteInvoiceDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns attachment OK
     * @throws ApiError
     */
    public static getInvoiceDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToInvoiceDraft(
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createInvoiceFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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

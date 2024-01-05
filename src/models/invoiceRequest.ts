/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { invoiceLineRequest } from './invoiceLineRequest';

export type invoiceRequest = {
    /**
     * UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters. If not provided, API will generate a UUID.
     */
    uuid?: string;
    /**
     * Date that the invoice was issued, format yyyy-mm-dd
     */
    issueDate: string;
    /**
     * Due date of invoice, format yyyy-mm-dd
     */
    dueDate: string;
    lines: Array<invoiceLineRequest>;
    ourReference?: string;
    /**
     * Your reference for invoice, free string format
     */
    yourReference?: string;
    /**
     * Reference if sending via EHF.
     */
    orderReference?: string;
    /**
     * customerId = contactId where customer = true
     */
    customerId: number;
    /**
     * Id of the contact person. Must be associated with the provided customer.
     */
    contactPersonId?: number;
    /**
     * Bank account code associated with invoice, format 1920:XXXXX
     */
    bankAccountCode: string;
    /**
     * ISO 4217 currency code. Defaults to "NOK" if unspecified.
     */
    currency?: string;
    /**
     * If not present, and standard text is registered, standard text is printed.
     */
    invoiceText?: string;
    /**
     * Payment taken in cash (True) or not (False).
     */
    cash: boolean;
    /**
     * For Cash Invoices only. For instance "1920:10001".
     */
    paymentAccount?: string;
    /**
     * Optional - Associated project for the invoice to be created.
     */
    projectId?: number;
};


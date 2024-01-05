/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { invoiceishDraftLine } from './invoiceishDraftLine';

export type invoiceishDraftRequest = {
    /**
     * Type of draft.
     */
    type: invoiceishDraftRequest.type;
    /**
     * UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.
     */
    uuid?: string;
    /**
     * Issue date of the invoice draft, format yyyy-mm-dd
     */
    issueDate?: string;
    /**
     * Days until due date of the invoice draft.
     */
    daysUntilDueDate: number;
    /**
     * Comment/description printed above the invoice lines. If not present, and standard text is registered, standard text is printed.
     */
    invoiceText?: string;
    yourReference?: string;
    ourReference?: string;
    /**
     * Reference if sending invoice via EHF.
     */
    orderReference?: string;
    lines?: Array<invoiceishDraftLine>;
    /**
     * ISO 4217 currency code
     */
    currency?: string;
    bankAccountNumber?: string;
    iban?: string;
    bic?: string;
    paymentAccount?: string;
    /**
     * customerId = contactId where customer = true
     */
    customerId: number;
    /**
     * Id of the contact person. Must be associated with the provided customer.
     */
    contactPersonId?: number;
    projectId?: number;
};

export namespace invoiceishDraftRequest {

    /**
     * Type of draft.
     */
    export enum type {
        INVOICE = 'invoice',
        CASH_INVOICE = 'cash_invoice',
        OFFER = 'offer',
        ORDER_CONFIRMATION = 'order_confirmation',
        CREDIT_NOTE = 'credit_note',
    }


}


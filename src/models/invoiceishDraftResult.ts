/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attachment } from './attachment';
import type { contact } from './contact';
import type { invoiceishDraftLine } from './invoiceishDraftLine';

export type invoiceishDraftResult = {
    /**
     * Invoice draft ID
     */
    readonly draftId?: number;
    /**
     * UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.
     */
    uuid?: string;
    /**
     * Type of invoice draft.
     */
    type?: invoiceishDraftResult.type;
    /**
     * Date that the draft was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    /**
     * Issue date of the invoice draft, format yyyy-mm-dd
     */
    issueDate?: string;
    /**
     * Days until due date of the invoice draft.
     */
    daysUntilDueDate?: number;
    /**
     * Comment/description printed above the invoice lines
     */
    invoiceText?: string;
    /**
     * ISO 4217 currency code
     */
    currency?: string;
    yourReference?: string;
    ourReference?: string;
    /**
     * Reference if sending invoice via EHF.
     */
    orderReference?: string;
    lines?: Array<invoiceishDraftLine>;
    /**
     * The net amount to be invoiced in the specified currency.
     */
    net?: number;
    /**
     * The gross amount to be invoiced in the specified currency.
     */
    gross?: number;
    bankAccountNumber?: string;
    iban?: string;
    bic?: string;
    paymentAccount?: string;
    /**
     * Customer(s) to be invoiced.
     */
    customers?: Array<contact>;
    attachments?: Array<attachment>;
    createdFromInvoiceId?: number;
    projectId?: number;
};

export namespace invoiceishDraftResult {

    /**
     * Type of invoice draft.
     */
    export enum type {
        INVOICE = 'invoice',
        CASH_INVOICE = 'cash_invoice',
        OFFER = 'offer',
        ORDER_CONFIRMATION = 'order_confirmation',
        CREDIT_NOTE = 'credit_note',
        REPEATING_INVOICE = 'repeating_invoice',
    }


}


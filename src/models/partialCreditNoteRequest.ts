/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { creditNoteLineResult } from './creditNoteLineResult';

export type partialCreditNoteRequest = {
    /**
     * Optional
     */
    ourReference?: string;
    /**
     * Optional - Your reference for invoice, free string format.
     */
    yourReference?: string;
    /**
     * Reference if sending via EHF.
     */
    orderReference?: string;
    /**
     * Optional - Project associated with the credit note.
     */
    project?: number;
    /**
     * ISO 4217 currency code
     */
    currency?: string;
    /**
     * Date that the credit note is issued, format yyyy-mm-dd
     */
    issueDate: string;
    /**
     * Optional - Id of invoice that the credit note is associated with.
     */
    invoiceId?: number;
    /**
     * Id of contact that the credit note is associated with.
     */
    contactId?: number;
    /**
     * Id of contact person that the credit note is associated with (Credit person must belong to the provided contact).
     */
    contactPersonId?: number;
    creditNoteText?: string;
    lines: Array<creditNoteLineResult>;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type fullCreditNoteRequest = {
    /**
     * Date that the credit note is issued, format yyyy-mm-dd
     */
    issueDate: string;
    /**
     * Id of invoice that the credit note is associated with.
     */
    invoiceId: number;
    creditNoteText?: string;
};


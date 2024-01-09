/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type updateInvoiceRequest = {
    /**
     * Due date of invoice, format yyyy-mm-dd
     */
    newDueDate?: string;
    /**
     * If the invoice was not sent using Fiken this can be set to "true"
     */
    sentManually?: boolean;
};


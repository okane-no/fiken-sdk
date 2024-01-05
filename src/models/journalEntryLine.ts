/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type journalEntryLine = {
    /**
     * This will be the net amount (excluding VAT) for debitAccount lines and gross amount
     * (including VAT) for creditAccount lines. The reason for this difference is due to the
     * way Fiken calculates VAT based on the debitVatCode and creditVatCode.
     *
     */
    amount: number;
    readonly account?: string;
    readonly vatCode?: string;
    debitAccount?: string;
    debitVatCode?: number;
    creditAccount?: string;
    creditVatCode?: number;
    readonly projectId?: Array<number>;
    /**
     * Date that journal entry line was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
};


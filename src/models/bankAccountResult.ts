/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type bankAccountResult = {
    bankAccountId?: number;
    name?: string;
    accountCode?: string;
    bankAccountNumber?: string;
    iban?: string;
    bic?: string;
    foreignService?: string;
    type?: bankAccountResult.type;
    /**
     * Amounts are always represented as a number, and specifies the number of cents in the amount. Fractions will be ignored. ie. 10050 = 100.50
     */
    reconciledBalance?: number;
    reconciledDate?: string;
    inactive?: boolean;
};

export namespace bankAccountResult {

    export enum type {
        NORMAL = 'normal',
        TAX_DEDUCTION = 'tax_deduction',
        FOREIGN = 'foreign',
        CREDIT_CARD = 'credit_card',
    }


}


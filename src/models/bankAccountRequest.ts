/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type bankAccountRequest = {
    name: string;
    bankAccountNumber: string;
    bic?: string;
    iban?: string;
    foreignService?: string;
    type: bankAccountRequest.type;
    inactive?: boolean;
};

export namespace bankAccountRequest {

    export enum type {
        NORMAL = 'normal',
        TAX_DEDUCTION = 'tax_deduction',
        FOREIGN = 'foreign',
        CREDIT_CARD = 'credit_card',
    }


}


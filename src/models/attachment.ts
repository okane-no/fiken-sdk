/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type attachment = {
    /**
     * User-defined identifier for attachment. Could be the Invoice Id or receipt number for example.
     */
    identifier?: string;
    /**
     * For use with API credentials (bearer token or oauth 2)
     */
    downloadUrl?: string;
    /**
     * Requires the user to login with username and password in Fiken.
     */
    downloadUrlWithFikenNormalUserCredentials?: string;
    /**
     * Field for additional information for this attachment.
     */
    comment?: string;
    type?: attachment.type;
};

export namespace attachment {

    export enum type {
        INVOICE = 'invoice',
        REMINDER = 'reminder',
        UNSPECIFIED = 'unspecified',
        OCR = 'ocr',
        BANK_STATEMENT = 'bank_statement',
    }


}


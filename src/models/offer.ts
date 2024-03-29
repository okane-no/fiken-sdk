/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address } from './address';
import type { invoiceLineResult } from './invoiceLineResult';

export type offer = {
    /**
     * offer ID
     */
    readonly offerId?: number;
    /**
     * UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.
     */
    readonly offerDraftUuid?: string;
    /**
     * Date for offer
     */
    date?: string;
    /**
     * Unique offer number generated by us.
     */
    offerNumber?: number;
    /**
     * Net amount (in invoice currency) in cents.
     */
    net?: number;
    /**
     * VAT amount (in invoice currency) in cents.
     */
    vat?: number;
    /**
     * Gross amount (= net+VAT) (in invoice currency) in cents.
     */
    gross?: number;
    /**
     * Comment/description
     */
    comment?: string;
    yourReference?: string;
    ourReference?: string;
    /**
     * Reference if sending invoice via EHF.
     */
    orderReference?: string;
    /**
     * The discount amount in the specified currency.
     */
    discount?: number;
    address?: address;
    lines?: Array<invoiceLineResult>;
    /**
     * ISO 4217 currency code, default value is NOK
     */
    currency?: string;
    /**
     * Contact associated with offer.
     */
    contactId?: any;
    /**
     * Contact person associated with offer. Must belong to the provided contact.
     */
    contactPersonId?: any;
    projectId?: any;
    /**
     * If order confirmation has been archived or not.
     */
    archived?: boolean;
};


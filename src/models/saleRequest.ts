/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderLine } from './orderLine';

export type saleRequest = {
    /**
     * Identifier for sale.
     */
    saleNumber?: string;
    /**
     * Due date of the invoice, format yyyy-mm-dd
     */
    date: string;
    /**
     * Either cash_sale, invoice, or external_invoice.
     */
    kind: saleRequest.kind;
    /**
     * Total amount paid in NOK
     */
    totalPaid?: number;
    /**
     * Total amount paid in other currency.
     */
    totalPaidInCurrency?: number;
    lines: Array<orderLine>;
    /**
     * customerId = contactId where customer = true
     */
    customerId?: number;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    /**
     * Due date of the invoice, format yyyy-mm-dd
     */
    dueDate?: string;
    /**
     * Norwegian KID number. Number from 2 to 25 digits long.
     */
    kid?: string;
    paymentAccount?: string;
    /**
     * Payment date of the invoice, format yyyy-mm-dd
     */
    paymentDate?: string;
    /**
     * Fee associated with payment of sale.
     */
    paymentFee?: number;
    /**
     * Id of given project.
     */
    projectId?: number;
};

export namespace saleRequest {

    /**
     * Either cash_sale, invoice, or external_invoice.
     */
    export enum kind {
        CASH_SALE = 'cash_sale',
        INVOICE = 'invoice',
        EXTERNAL_INVOICE = 'external_invoice',
    }


}


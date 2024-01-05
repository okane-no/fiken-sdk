/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderLine } from './orderLine';

export type purchaseRequest = {
    readonly transactionId?: number;
    /**
     * Invoice/sale number or similar.
     */
    identifier?: string;
    /**
     * Payment date, format yyyy-mm-dd
     */
    date: string;
    /**
     * Due date of the invoice, format yyyy-mm-dd
     */
    dueDate?: string;
    /**
     * Purchased with cash or through a supplier.
     */
    kind: purchaseRequest.kind;
    lines: Array<orderLine>;
    /**
     * Id of supplier if not a cash purchase.
     */
    supplierId?: number;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    paymentAccount?: string;
    /**
     * Payment date, format yyyy-mm-dd
     */
    paymentDate?: string;
    /**
     * Norwegian KID number. Number from 2 to 25 digits long.
     */
    kid?: string;
    /**
     * Id of given project.
     */
    projectId?: number;
};

export namespace purchaseRequest {

    /**
     * Purchased with cash or through a supplier.
     */
    export enum kind {
        CASH_PURCHASE = 'cash_purchase',
        SUPPLIER = 'supplier',
    }


}


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attachment } from './attachment';
import type { contact } from './contact';
import type { orderLine } from './orderLine';
import type { payment } from './payment';
import type { projectResult } from './projectResult';

export type purchaseResult = {
    /**
     * Id of given purchase.
     */
    readonly purchaseId?: number;
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
    kind: purchaseResult.kind;
    paid: boolean;
    lines: Array<orderLine>;
    supplier?: contact;
    /**
     * ISO 4217 currency code
     */
    currency: string;
    paymentAccount?: string;
    /**
     * Payment date, format yyyy-mm-dd
     */
    paymentDate?: string;
    payments?: Array<payment>;
    purchaseAttachments?: Array<attachment>;
    /**
     * Norwegian KID number. Number from 2 to 25 digits long.
     */
    kid?: string;
    project?: Array<projectResult>;
    /**
     * Whether the purchase has been deleted or not
     */
    deleted?: boolean;
};

export namespace purchaseResult {

    /**
     * Purchased with cash or through a supplier.
     */
    export enum kind {
        CASH_PURCHASE = 'cash_purchase',
        SUPPLIER = 'supplier',
    }


}


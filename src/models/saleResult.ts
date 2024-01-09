/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attachment } from './attachment';
import type { contact } from './contact';
import type { orderLine } from './orderLine';
import type { payment } from './payment';
import type { projectResult } from './projectResult';

export type saleResult = {
    /**
     * Sale Id
     */
    readonly saleId?: number;
    /**
     * Date that the sale was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    transactionId?: number;
    /**
     * Identifier for sale.
     */
    saleNumber?: string;
    /**
     * Due date of the invoice, format yyyy-mm-dd
     */
    date?: string;
    /**
     * Either cash_sale, invoice, or external_invoice.
     */
    kind?: saleResult.kind;
    /**
     * Total net amount of the sale to be paid.
     */
    netAmount?: number;
    /**
     * VAT amount on sale.
     */
    vatAmount?: number;
    /**
     * If the sale as been marked as settled (True) or not (False).
     */
    settled?: boolean;
    /**
     * Date the the sale was marked as settled, format yyyy-mm-dd
     */
    settledDate?: string;
    /**
     * If a loss has been registered for this sale (tapsf�ring av salg).
     */
    writeOff?: boolean;
    /**
     * Total amount paid in NOK
     */
    readonly totalPaid?: number;
    /**
     * Total amount paid in other currency.
     */
    readonly totalPaidInCurrency?: number;
    outstandingBalance?: number;
    lines?: Array<orderLine>;
    customer?: contact;
    /**
     * ISO 4217 currency code
     */
    currency?: string;
    /**
     * Due date of the invoice, format yyyy-mm-dd
     */
    dueDate?: string;
    /**
     * Norwegian KID number. Number from 2 to 25 digits long.
     */
    kid?: string;
    paymentAccount?: string;
    salePayments?: Array<payment>;
    saleAttachments?: Array<attachment>;
    /**
     * Payment date of the invoice, format yyyy-mm-dd
     */
    readonly paymentDate?: string;
    project?: projectResult;
    /**
     * Whether the sale has been deleted or not
     */
    deleted?: boolean;
};

export namespace saleResult {

    /**
     * Either cash_sale, invoice, or external_invoice.
     */
    export enum kind {
        CASH_SALE = 'cash_sale',
        INVOICE = 'invoice',
        EXTERNAL_INVOICE = 'external_invoice',
    }


}


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { draftLineRequest } from './draftLineRequest';
import type { payment } from './payment';

export type draftRequest = {
    /**
     * Issue date of the draft, format yyyy-mm-dd
     */
    invoiceIssueDate?: string;
    /**
     * Due date of draft, format yyyy-mm-dd
     */
    dueDate?: string;
    /**
     * If invoice associated with draft, this is the invoice number (not to be confused with the invoiceId of an invoice issued from Fiken)
     */
    invoiceNumber?: string;
    /**
     * Contact Id
     */
    contactId?: number;
    /**
     * Project ID if only 1 project associated with entire draft. It is also possible to specify the project on individual draft lines
     */
    projectId?: number;
    /**
     * If a cash sale/purchase (true) or otherwise (false)
     */
    cash: boolean;
    /**
     * ISO 4217 currency code
     */
    currency?: string;
    /**
     * Norwegian KID number. Number from 2 to 25 digits long.
     */
    kid?: string;
    /**
     * Whether the sale/purchase has been paid (true) or not (false)
     */
    paid?: boolean;
    payments?: Array<payment>;
    lines: Array<draftLineRequest>;
};


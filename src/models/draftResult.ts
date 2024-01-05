/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attachment } from './attachment';
import type { contact } from './contact';
import type { draftLineResult } from './draftLineResult';
import type { payment } from './payment';
import type { projectResult } from './projectResult';

export type draftResult = {
    /**
     * Draft ID
     */
    draftId?: number;
    /**
     * UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters.
     */
    uuid?: string;
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
    contact?: contact;
    project?: projectResult;
    /**
     * If a cash sale/purchase (true) or otherwise (false)
     */
    cash?: boolean;
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
    attachments?: Array<attachment>;
    payments?: Array<payment>;
    lines?: Array<draftLineResult>;
};


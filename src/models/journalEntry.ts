/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attachment } from './attachment';
import type { journalEntryLine } from './journalEntryLine';

export type journalEntry = {
    readonly journalEntryId?: number;
    /**
     * Date that journal entry was created in Fiken, format yyyy-mm-dd
     */
    readonly createdDate?: string;
    /**
     * Date that journal entry was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    transactionId?: number;
    /**
     * If a journal entry has been cancelled this provides the id of the balancing transaction
     */
    readonly offsetTransactionId?: number;
    readonly journalEntryNumber?: number;
    description: string;
    date: string;
    lines: Array<journalEntryLine>;
    readonly attachments?: Array<attachment>;
};


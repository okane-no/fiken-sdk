/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { journalEntry } from './journalEntry';

/**
 * Transaction result upon creation of a General Journal Entry
 */
export type transaction = {
    transactionId?: number;
    /**
     * Date that product was created in Fiken, format yyyy-mm-dd
     */
    readonly createdDate?: string;
    /**
     * Date that product was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    description?: string;
    type?: string;
    entries?: Array<journalEntry>;
};


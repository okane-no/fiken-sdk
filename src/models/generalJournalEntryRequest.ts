/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { journalEntry } from './journalEntry';

export type generalJournalEntryRequest = {
    description?: string;
    /**
     * The journal entry can be set to either open or closed (closed is the default). In the case of an open journal entry these can be deleted without creating a counter transaction.
     */
    open?: boolean;
    journalEntries: Array<journalEntry>;
};


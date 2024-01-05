/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type inboxResult = {
    readonly documentId?: number;
    /**
     * Name of the document as it appears in the inbox
     */
    name?: string;
    /**
     * Additional description of document
     */
    description?: string;
    /**
     * Name of the underlying file for the inbox document
     */
    filename?: string;
    /**
     * Whether the document has been used as documentation or not
     */
    status?: boolean;
    /**
     * When the document was created
     */
    createdAt?: string;
};


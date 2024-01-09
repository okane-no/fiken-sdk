/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contact } from './contact';

export type projectResult = {
    projectId?: number;
    readonly number?: string;
    name?: string;
    description?: string;
    /**
     * Start date for the project, inclusive, format yyyy-mm-dd
     */
    startDate?: string;
    /**
     * End date for the project, inclusive, format yyyy-mm-dd
     */
    endDate?: string;
    contact?: contact;
    /**
     * Whether the project is completed or not.
     */
    completed?: boolean;
};


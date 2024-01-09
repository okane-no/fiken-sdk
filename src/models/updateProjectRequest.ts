/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type updateProjectRequest = {
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
    contactId?: number;
    /**
     * Whether the project is completed or not.
     */
    completed?: boolean;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address } from './address';

export type company = {
    /**
     * Name of company.
     */
    name?: string;
    /**
     * Formatted name of company. This is the companySlug that should be used in all URLs related to this company.
     */
    slug?: string;
    /**
     * Brreg organization number.
     */
    organizationNumber?: string;
    vatType?: company.vatType;
    address?: address;
    phoneNumber?: string;
    email?: string;
    creationDate?: string;
    hasApiAccess?: boolean;
    /**
     * Whether the company is a demo (true) or not
     */
    testCompany?: boolean;
    accountingStartDate?: string;
};

export namespace company {

    export enum vatType {
        NO = 'no',
        YEARLY = 'yearly',
        MONTHLY = 'monthly',
        BI_MONTHLY = 'bi-monthly',
    }


}


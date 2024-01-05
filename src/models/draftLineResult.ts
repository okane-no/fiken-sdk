/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { projectResult } from './projectResult';

export type draftLineResult = {
    /**
     * Description of the sale/purchase line.
     */
    text?: string;
    /**
     * Vat Types for SALES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, EXEMPT_IMPORT_EXPORT, EXEMPT, OUTSIDE, EXEMPT_REVERSE]
     * Vat Types for PURCHASES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, HIGH_DIRECT, HIGH_BASIS, MEDIUM_DIRECT, MEDIUM_BASIS, NONE_IMPORT_BASIS,
     * HIGH_FOREIGN_SERVICE_DEDUCTIBLE, HIGH_FOREIGN_SERVICE_NONDEDUCTIBLE, LOW_FOREIGN_SERVICE_DEDUCTIBLE,
     * LOW_FOREIGN_SERVICE_NONDEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_DEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_NONDEDUCTIBLE]
     *
     */
    vatType?: string;
    /**
     * Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.
     */
    incomeAccount?: string;
    /**
     * Net amount (in creditNote currency) in cents.
     */
    net?: number;
    /**
     * Gross amount (= net+VAT) (in creditNote currency) in cents.
     */
    gross?: number;
    project?: projectResult;
};


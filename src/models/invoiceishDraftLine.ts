/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type invoiceishDraftLine = {
    /**
     * Unique draft line ID
     */
    invoiceishDraftLineId?: number;
    /**
     * Date that the draft line was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    /**
     * Product to be credited/debited on invoice draft line.
     */
    productId?: number;
    /**
     * Description of the invoiced product or service.
     */
    description?: string;
    /**
     * Net price per unit in invoice currency (in cents).
     */
    unitPrice?: number;
    /**
     * Vat Types for SALES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, EXEMPT_IMPORT_EXPORT, EXEMPT, OUTSIDE, EXEMPT_REVERSE]
     * Vat Types for PURCHASES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, HIGH_DIRECT, HIGH_BASIS, MEDIUM_DIRECT, MEDIUM_BASIS, NONE_IMPORT_BASIS,
     * HIGH_FOREIGN_SERVICE_DEDUCTIBLE, HIGH_FOREIGN_SERVICE_NONDEDUCTIBLE, LOW_FOREIGN_SERVICE_DEDUCTIBLE,
     * LOW_FOREIGN_SERVICE_NONDEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_DEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_NONDEDUCTIBLE]
     *
     */
    vatType?: string;
    /**
     * Number of units to be invoiced.
     */
    quantity: number;
    /**
     * Percentage discount charged on invoice draft line. Should be a value between 0 and 100. Can be decimal values such as 25.5
     */
    discount?: number;
    /**
     * Additional information to be printed on invoice.
     */
    comment?: string;
    /**
     * Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.
     */
    incomeAccount?: string;
};


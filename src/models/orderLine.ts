/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderLine = {
    /**
     * Description of the product or service.
     */
    description?: string;
    /**
     * Net amount of order line in cents. Either netPrice or netPriceInCurrency must be provided.
     */
    netPrice?: number;
    /**
     * VAT amount of order line in cents.
     */
    vat?: number;
    /**
     * Expense account (kostnadskonto) associated with payment.
     */
    account?: string;
    /**
     * Vat Types for SALES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, EXEMPT_IMPORT_EXPORT, EXEMPT, OUTSIDE, EXEMPT_REVERSE]
     * Vat Types for PURCHASES: [NONE, HIGH, MEDIUM, RAW_FISH, LOW, HIGH_DIRECT, HIGH_BASIS, MEDIUM_DIRECT, MEDIUM_BASIS, NONE_IMPORT_BASIS,
     * HIGH_FOREIGN_SERVICE_DEDUCTIBLE, HIGH_FOREIGN_SERVICE_NONDEDUCTIBLE, LOW_FOREIGN_SERVICE_DEDUCTIBLE,
     * LOW_FOREIGN_SERVICE_NONDEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_DEDUCTIBLE, HIGH_PURCHASE_OF_EMISSIONSTRADING_OR_GOLD_NONDEDUCTIBLE]
     *
     */
    vatType: string;
    /**
     * Net amount in currency (in cents)
     */
    netPriceInCurrency?: number;
    /**
     * VAT amount in currency (in cents)
     */
    vatInCurrency?: number;
    /**
     * If a purchase is split over several projects, project/line can be specified. This field is only to be used for purchases.
     */
    projectId?: number;
};


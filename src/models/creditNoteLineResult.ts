/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type creditNoteLineResult = {
    /**
     * Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.
     */
    incomeAccount?: string;
    /**
     * One of: {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
     *
     */
    vatType?: string;
    /**
     * Net price per unit in invoice currency (in cents).
     */
    unitPrice: number;
    /**
     * Number of units to be invoiced.
     */
    quantity: number;
    /**
     * If field is set, all amounts must be given before the discount is applied. The API will calculate the new totals. Discount value should be a percent with a value between 0 and 100. Decimal values such as 25.5 are also allowed.
     */
    discount?: number;
    /**
     * Product Id of product associated with invoice line.
     */
    productId?: number;
    /**
     * Description of the invoiced product or service.
     */
    description?: string;
    /**
     * Additional information to be printed on invoice.
     */
    comment?: string;
};


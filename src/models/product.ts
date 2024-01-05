/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type product = {
    /**
     * Product Id.
     */
    readonly productId?: number;
    /**
     * Date that product was created in Fiken, format yyyy-mm-dd
     */
    readonly createdDate?: string;
    /**
     * Date that product was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    /**
     * Product name.
     */
    name: string;
    /**
     * The net unit price in cents.
     */
    unitPrice?: number;
    /**
     * The accounting account that will receive the payment.
     */
    incomeAccount: string;
    /**
     * One of {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
     */
    vatType: string;
    /**
     * If product is in use (True) or not (False).
     */
    active: boolean;
    productNumber?: string;
    /**
     * Number of products available in stock. If not provided, stock value is set to null. Decimal values are accepted. For example 5.5
     */
    stock?: number;
    /**
     * Optional field for additional information.
     */
    note?: string;
};


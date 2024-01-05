/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type invoiceLineRequest = {
    /**
     * Net amount of invoice line in cents in original currency.
     */
    net?: number;
    /**
     * VAT amount of invoice line in cents in original currency.
     */
    vat?: number;
    /**
     * Taken from either 1) the line or 2) the product. At least vatType or vatPercent has to be specified. If both are specified, Fiken will assert that the given vat type matches the given vat percent for the issue date.
     * One of: {"HIGH", "MEDIUM", "LOW", "EXEMPT", "EXEMPT_IMPORT_EXPORT", "EXEMPT_REVERSE", "OUTSIDE", "NONE"}. "HIGH" is the most common.
     *
     */
    vatType?: string;
    /**
     * Gross amount of invoice line in cents.
     */
    gross?: number;
    /**
     * Percentage value of VAT charged on invoice line. Should be a value between 0 and 100. Can be decimal values such as 25.5
     */
    vatInPercent?: number;
    /**
     * Net price per unit in invoice currency (in cents). WARNING - if specified here and different from unitPrice of the product, then this amount overwrites the product price on the invoice.
     */
    unitPrice?: number;
    /**
     * Number of units to be invoiced.
     */
    quantity: number;
    /**
     * If field is set, all amounts must be given before the discount is applied. The API will calculate the new totals. Discount value should be a value between 0 and 100.
     */
    discount?: number;
    /**
     * Name of product to be printed on invoice line. Should only be specified when productId is not provided.
     */
    productName?: string;
    /**
     * Product Id of product associated with invoice line.
     */
    productId?: number;
    /**
     * Description of the invoiced product or service. WARNING - if specified here and different from description of the product, then thisoverwrites the product description on the invoice.
     */
    description?: string;
    /**
     * Additional information to be printed on invoice.
     */
    comment?: string;
    /**
     * Field is similar to vatType, it defaults to the product's income account. Either the line or the product needs to have an income account set.
     * WARNING - if specified here and different from income account of the product, then this account overwrites the product account on the invoice.
     *
     */
    incomeAccount?: string;
};


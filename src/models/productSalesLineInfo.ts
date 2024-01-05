/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type productSalesLineInfo = {
    count?: number;
    sales?: number;
    /**
     * Net amount excluding VAT in cents (5000 = 50.00)
     */
    netAmount?: number;
    /**
     * VAT amount for sale in cents (500 = 5.00)
     */
    vatAmount?: number;
    /**
     * Gross amount of sale (net + VAT) in cents (5500 = 55.00)
     */
    grossAmount?: number;
};


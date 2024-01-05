/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Returns a payment object with additional fields currrencyAmount, currency, and fee if it is a foreign currency payment
 */
export type payment = {
    /**
     * Id of given payment.
     */
    readonly paymentId?: number;
    /**
     * Payment date, format yyyy-mm-dd
     */
    date: string;
    /**
     * Account associated with payment.
     */
    account: string;
    /**
     * Amount paid in the specified currency. If no currency is provided then currency defaults to "NOK". Formatted in cents (34000 = 340.00)
     */
    amount: number;
    /**
     * Attribute of a foreign payment only. Is required if amount is provided in currency other than NOK and should be the actual amount that was received in the bank account. Formatted in cents (500000 = 5000.00)
     */
    readonly amountInNok?: number;
    /**
     * Only specify the currency if other than "NOK", otherwise default currency is "NOK". ISO 4217 currency code
     */
    currency?: string;
    /**
     * Any fees additional to the amount paid in the specified currency. This is always a "NOK" amount even if the sale currency is a different currency.
     */
    fee?: number;
};


/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address } from './address';
import type { attachment } from './attachment';
import type { contactNote } from './contactNote';
import type { contactPerson } from './contactPerson';

export type contact = {
    readonly contactId?: number;
    /**
     * Date that contact was created in Fiken, format yyyy-mm-dd.
     */
    readonly createdDate?: string;
    /**
     * Date that contact was last modified in Fiken, format yyyy-mm-dd.
     */
    readonly lastModifiedDate?: string;
    name: string;
    email?: string;
    /**
     * Brreg organization number.
     */
    organizationNumber?: string;
    readonly customerNumber?: number;
    /**
     * Format 1500:XXXXX
     */
    readonly customerAccountCode?: string;
    phoneNumber?: string;
    /**
     * A number that can be used to connect a contact to your own data.
     */
    memberNumber?: number;
    readonly supplierNumber?: number;
    /**
     * Format 2400:XXXXX
     */
    readonly supplierAccountCode?: string;
    /**
     * True if the contact is a customer. It is possible for a contact to be both customer and supplier.
     */
    customer?: boolean;
    /**
     * True if the contact is a supplier. It is possible for a contact to be both supplier and customer.
     */
    supplier?: boolean;
    bankAccountNumber?: string;
    contactPerson?: Array<contactPerson>;
    readonly notes?: Array<contactNote>;
    /**
     * ISO 4217 currency code. Default foreign currency to use when creating invoice to this contact (USD, EUR, SEK etc)
     */
    currency?: string;
    /**
     * The language to use when sending documents to this contact. NORWEGIAN or ENGLISH. Defaults to NORWEGIAN.
     */
    language?: string | null;
    /**
     * Whether the contact has been deactivated (true) or is active (false)
     */
    inactive?: boolean;
    /**
     * Default number of days until due date for invoices.
     */
    daysUntilInvoicingDueDate?: number;
    address?: address;
    groups?: Array<string>;
    readonly documents?: Array<attachment>;
};


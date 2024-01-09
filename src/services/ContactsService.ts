/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contact } from '../models/contact';
import type { contactPerson } from '../models/contactPerson';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContactsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves all contacts for the specified company.
     * @returns contact OK
     * @throws ApiError
     */
    public getContacts({
        companySlug,
        page,
        pageSize = 25,
        lastModified,
        lastModifiedLe,
        lastModifiedLt,
        lastModifiedGe,
        lastModifiedGt,
        createdDate,
        createdDateLe,
        createdDateLt,
        createdDateGe,
        createdDateGt,
        supplierNumber,
        customerNumber,
        memberNumber,
        name,
        organizationNumber,
        email,
        customer,
        supplier,
        inactive,
        group,
        sortBy = 'createdDate asc',
        phoneNumber,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
         * Default value is 0.
         *
         */
        page?: number,
        /**
         * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
         * Default value is 25.
         *
         */
        pageSize?: number,
        /**
         * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModified?: string,
        /**
         * Returns results that have been last modified before or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedLe?: string,
        /**
         * Returns results that have been last modified strictly before the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedLt?: string,
        /**
         * Returns results that have been last modified after or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedGe?: string,
        /**
         * Returns results that have been last modified strictly after the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        lastModifiedGt?: string,
        /**
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDate?: string,
        /**
         * Returns results that were created before or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateLe?: string,
        /**
         * Returns results that were created strictly before the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateLt?: string,
        /**
         * Returns results that were created after or on the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateGe?: string,
        /**
         * Returns results that were created strictly after the date provided as a parameter value.
         * Dates are represented as strings formatted as YYYY-MM-DD.
         * Example: January 1st, 1970: "1970-01-01"
         *
         */
        createdDateGt?: string,
        /**
         * Find all results with the supplier number equal to the specified parameter.
         */
        supplierNumber?: number,
        /**
         * Find all results with the customer number equal to the specified parameter.
         */
        customerNumber?: number,
        /**
         * Find all results with the member number equal to the specified parameter.
         */
        memberNumber?: number,
        /**
         * Find all results with the name equal to the specified parameter.
         */
        name?: string,
        /**
         * Find all results with the organization number equal to the specified parameter.
         */
        organizationNumber?: string,
        /**
         * Find all results with the email equal to the specified parameter.
         */
        email?: string,
        /**
         * Returns all contacts that are customers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned.
         */
        customer?: boolean,
        /**
         * Returns all contacts that are suppliers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned.
         */
        supplier?: boolean,
        /**
         * Return all active contacts (false) or all inactive contacts (true).
         */
        inactive?: boolean,
        /**
         * Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
         */
        group?: string,
        sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc',
        /**
         * Find all results with the phone number equal to the specified parameter.
         */
        phoneNumber?: string,
    }): CancelablePromise<Array<contact>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/contacts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'lastModified': lastModified,
                'lastModifiedLe': lastModifiedLe,
                'lastModifiedLt': lastModifiedLt,
                'lastModifiedGe': lastModifiedGe,
                'lastModifiedGt': lastModifiedGt,
                'createdDate': createdDate,
                'createdDateLe': createdDateLe,
                'createdDateLt': createdDateLt,
                'createdDateGe': createdDateGe,
                'createdDateGt': createdDateGt,
                'supplierNumber': supplierNumber,
                'customerNumber': customerNumber,
                'memberNumber': memberNumber,
                'name': name,
                'organizationNumber': organizationNumber,
                'email': email,
                'customer': customer,
                'supplier': supplier,
                'inactive': inactive,
                'group': group,
                'sortBy': sortBy,
                'phoneNumber': phoneNumber,
            },
        });
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @returns string Created
     * @throws ApiError
     */
    public createContact({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: contact,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/contacts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field.
     * ContactId is returned in the Location response header for POST contact.
     *
     * @returns contact OK
     * @throws ApiError
     */
    public getContact({
        companySlug,
        contactId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
    }): CancelablePromise<contact> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/contacts/{contactId}',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
            },
        });
    }

    /**
     * Updates an existing contact.
     * @returns string Updated
     * @throws ApiError
     */
    public updateContact({
        companySlug,
        contactId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        requestBody: contact,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/companies/{companySlug}/contacts/{contactId}',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToContact({
        companySlug,
        contactId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        formData?: {
            /**
             * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            /**
             * Not required.
             */
            comment?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/contacts/{contactId}/attachments',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Retrieves contact person(s) for a specified contact.
     *
     * @returns contactPerson OK
     * @throws ApiError
     */
    public getContactContactPerson({
        companySlug,
        contactId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
    }): CancelablePromise<Array<contactPerson>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/contacts/{contactId}/contactPerson',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
            },
        });
    }

    /**
     * Adds a new contact person to a contact
     * @returns string Created
     * @throws ApiError
     */
    public addContactPersonToContact({
        companySlug,
        contactId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        requestBody: contactPerson,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/contacts/{contactId}/contactPerson',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Retrieves specified contact person
     *
     * @returns contactPerson OK
     * @throws ApiError
     */
    public getContactPerson({
        companySlug,
        contactId,
        contactPersonId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        contactPersonId: number,
    }): CancelablePromise<contactPerson> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
                'contactPersonId': contactPersonId,
            },
        });
    }

    /**
     * Updates an existing contact person.
     * @returns string Updated
     * @throws ApiError
     */
    public updateContactContactPerson({
        companySlug,
        contactId,
        contactPersonId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        contactPersonId: number,
        requestBody: contactPerson,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
                'contactPersonId': contactPersonId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Delete a contact's contact person.
     * @returns void
     * @throws ApiError
     */
    public deleteContactContactPerson({
        companySlug,
        contactId,
        contactPersonId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        contactId: number,
        contactPersonId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}',
            path: {
                'companySlug': companySlug,
                'contactId': contactId,
                'contactPersonId': contactPersonId,
            },
        });
    }

}

/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contact } from '../models/contact';
import type { contactPerson } from '../models/contactPerson';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactsService {

    /**
     * Retrieves all contacts for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value.
     * Dates are represented as strings formatted as YYYY-MM-DD.
     * Example: January 1st, 1970: "1970-01-01"
     *
     * @param supplierNumber Find all results with the supplier number equal to the specified parameter.
     * @param customerNumber Find all results with the customer number equal to the specified parameter.
     * @param memberNumber Find all results with the member number equal to the specified parameter.
     * @param name Find all results with the name equal to the specified parameter.
     * @param organizationNumber Find all results with the organization number equal to the specified parameter.
     * @param email Find all results with the email equal to the specified parameter.
     * @param customer Returns all contacts that are customers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned.
     * @param supplier Returns all contacts that are suppliers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned.
     * @param inactive Return all active contacts (false) or all inactive contacts (true).
     * @param group Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
     * @param sortBy
     * @param phoneNumber Find all results with the phone number equal to the specified parameter.
     * @returns contact OK
     * @throws ApiError
     */
    public static getContacts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        lastModified?: string,
        lastModifiedLe?: string,
        lastModifiedLt?: string,
        lastModifiedGe?: string,
        lastModifiedGt?: string,
        createdDate?: string,
        createdDateLe?: string,
        createdDateLt?: string,
        createdDateGe?: string,
        createdDateGt?: string,
        supplierNumber?: number,
        customerNumber?: number,
        memberNumber?: number,
        name?: string,
        organizationNumber?: string,
        email?: string,
        customer?: boolean,
        supplier?: boolean,
        inactive?: boolean,
        group?: string,
        sortBy: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc' = 'createdDate asc',
        phoneNumber?: string,
    ): CancelablePromise<Array<contact>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createContact(
        companySlug: string,
        requestBody: contact,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @returns contact OK
     * @throws ApiError
     */
    public static getContact(
        companySlug: string,
        contactId: number,
    ): CancelablePromise<contact> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param requestBody
     * @returns string Updated
     * @throws ApiError
     */
    public static updateContact(
        companySlug: string,
        contactId: number,
        requestBody: contact,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToContact(
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @returns contactPerson OK
     * @throws ApiError
     */
    public static getContactContactPerson(
        companySlug: string,
        contactId: number,
    ): CancelablePromise<Array<contactPerson>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static addContactPersonToContact(
        companySlug: string,
        contactId: number,
        requestBody: contactPerson,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param contactPersonId
     * @returns contactPerson OK
     * @throws ApiError
     */
    public static getContactPerson(
        companySlug: string,
        contactId: number,
        contactPersonId: number,
    ): CancelablePromise<contactPerson> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param contactPersonId
     * @param requestBody
     * @returns string Updated
     * @throws ApiError
     */
    public static updateContactContactPerson(
        companySlug: string,
        contactId: number,
        contactPersonId: number,
        requestBody: contactPerson,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param contactId
     * @param contactPersonId
     * @returns void
     * @throws ApiError
     */
    public static deleteContactContactPerson(
        companySlug: string,
        contactId: number,
        contactPersonId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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

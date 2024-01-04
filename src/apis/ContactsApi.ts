// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Contact } from '../models/Contact';
import { ContactPerson } from '../models/ContactPerson';

/**
 * no description
 */
export class ContactsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates and adds a new attachment/document to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public async addAttachmentToContact(companySlug: string, contactId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "addAttachmentToContact", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "addAttachmentToContact", "contactId");
        }





        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/attachments'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (filename !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('filename', filename as any);
        }
        if (comment !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('comment', comment as any);
        }
        if (file !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('file', file, file.name);
             }
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Adds a new contact person to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPerson 
     */
    public async addContactPersonToContact(companySlug: string, contactId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "addContactPersonToContact", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "addContactPersonToContact", "contactId");
        }


        // verify required parameter 'contactPerson' is not null or undefined
        if (contactPerson === null || contactPerson === undefined) {
            throw new RequiredError("ContactsApi", "addContactPersonToContact", "contactPerson");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/contactPerson'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(contactPerson, "ContactPerson", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param companySlug Slug of company to retrieve
     * @param contact 
     */
    public async createContact(companySlug: string, contact: Contact, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "createContact", "companySlug");
        }


        // verify required parameter 'contact' is not null or undefined
        if (contact === null || contact === undefined) {
            throw new RequiredError("ContactsApi", "createContact", "contact");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(contact, "Contact", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a contact\'s contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public async deleteContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "deleteContactContactPerson", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "deleteContactContactPerson", "contactId");
        }


        // verify required parameter 'contactPersonId' is not null or undefined
        if (contactPersonId === null || contactPersonId === undefined) {
            throw new RequiredError("ContactsApi", "deleteContactContactPerson", "contactPersonId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)))
            .replace('{' + 'contactPersonId' + '}', encodeURIComponent(String(contactPersonId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public async getContact(companySlug: string, contactId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "getContact", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "getContact", "contactId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public async getContactContactPerson(companySlug: string, contactId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "getContactContactPerson", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "getContactContactPerson", "contactId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/contactPerson'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves specified contact person 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public async getContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "getContactPerson", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "getContactPerson", "contactId");
        }


        // verify required parameter 'contactPersonId' is not null or undefined
        if (contactPersonId === null || contactPersonId === undefined) {
            throw new RequiredError("ContactsApi", "getContactPerson", "contactPersonId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)))
            .replace('{' + 'contactPersonId' + '}', encodeURIComponent(String(contactPersonId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves all contacts for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param supplierNumber Find all results with the supplier number equal to the specified parameter.
     * @param customerNumber Find all results with the customer number equal to the specified parameter.
     * @param memberNumber Find all results with the member number equal to the specified parameter.
     * @param name Find all results with the name equal to the specified parameter.
     * @param organizationNumber Find all results with the organization number equal to the specified parameter.
     * @param email Find all results with the email equal to the specified parameter.
     * @param customer Returns all contacts that are customers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param supplier Returns all contacts that are suppliers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param inactive Return all active contacts (false) or all inactive contacts (true).
     * @param group Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
     * @param sortBy 
     * @param phoneNumber Find all results with the phone number equal to the specified parameter.
     */
    public async getContacts(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, supplierNumber?: number, customerNumber?: number, memberNumber?: number, name?: string, organizationNumber?: string, email?: string, customer?: boolean, supplier?: boolean, inactive?: boolean, group?: string, sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc', phoneNumber?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "getContacts", "companySlug");
        }


























        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (lastModified !== undefined) {
            requestContext.setQueryParam("lastModified", ObjectSerializer.serialize(lastModified, "string", "date"));
        }

        // Query Params
        if (lastModifiedLe !== undefined) {
            requestContext.setQueryParam("lastModifiedLe", ObjectSerializer.serialize(lastModifiedLe, "string", "date"));
        }

        // Query Params
        if (lastModifiedLt !== undefined) {
            requestContext.setQueryParam("lastModifiedLt", ObjectSerializer.serialize(lastModifiedLt, "string", "date"));
        }

        // Query Params
        if (lastModifiedGe !== undefined) {
            requestContext.setQueryParam("lastModifiedGe", ObjectSerializer.serialize(lastModifiedGe, "string", "date"));
        }

        // Query Params
        if (lastModifiedGt !== undefined) {
            requestContext.setQueryParam("lastModifiedGt", ObjectSerializer.serialize(lastModifiedGt, "string", "date"));
        }

        // Query Params
        if (createdDate !== undefined) {
            requestContext.setQueryParam("createdDate", ObjectSerializer.serialize(createdDate, "string", "date"));
        }

        // Query Params
        if (createdDateLe !== undefined) {
            requestContext.setQueryParam("createdDateLe", ObjectSerializer.serialize(createdDateLe, "string", "date"));
        }

        // Query Params
        if (createdDateLt !== undefined) {
            requestContext.setQueryParam("createdDateLt", ObjectSerializer.serialize(createdDateLt, "string", "date"));
        }

        // Query Params
        if (createdDateGe !== undefined) {
            requestContext.setQueryParam("createdDateGe", ObjectSerializer.serialize(createdDateGe, "string", "date"));
        }

        // Query Params
        if (createdDateGt !== undefined) {
            requestContext.setQueryParam("createdDateGt", ObjectSerializer.serialize(createdDateGt, "string", "date"));
        }

        // Query Params
        if (supplierNumber !== undefined) {
            requestContext.setQueryParam("supplierNumber", ObjectSerializer.serialize(supplierNumber, "number", ""));
        }

        // Query Params
        if (customerNumber !== undefined) {
            requestContext.setQueryParam("customerNumber", ObjectSerializer.serialize(customerNumber, "number", ""));
        }

        // Query Params
        if (memberNumber !== undefined) {
            requestContext.setQueryParam("memberNumber", ObjectSerializer.serialize(memberNumber, "number", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (organizationNumber !== undefined) {
            requestContext.setQueryParam("organizationNumber", ObjectSerializer.serialize(organizationNumber, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (customer !== undefined) {
            requestContext.setQueryParam("customer", ObjectSerializer.serialize(customer, "boolean", ""));
        }

        // Query Params
        if (supplier !== undefined) {
            requestContext.setQueryParam("supplier", ObjectSerializer.serialize(supplier, "boolean", ""));
        }

        // Query Params
        if (inactive !== undefined) {
            requestContext.setQueryParam("inactive", ObjectSerializer.serialize(inactive, "boolean", ""));
        }

        // Query Params
        if (group !== undefined) {
            requestContext.setQueryParam("group", ObjectSerializer.serialize(group, "string", ""));
        }

        // Query Params
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sortBy", ObjectSerializer.serialize(sortBy, "'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc'", ""));
        }

        // Query Params
        if (phoneNumber !== undefined) {
            requestContext.setQueryParam("phoneNumber", ObjectSerializer.serialize(phoneNumber, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an existing contact.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contact 
     */
    public async updateContact(companySlug: string, contactId: number, contact: Contact, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "updateContact", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "updateContact", "contactId");
        }


        // verify required parameter 'contact' is not null or undefined
        if (contact === null || contact === undefined) {
            throw new RequiredError("ContactsApi", "updateContact", "contact");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(contact, "Contact", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an existing contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     * @param contactPerson 
     */
    public async updateContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("ContactsApi", "updateContactContactPerson", "companySlug");
        }


        // verify required parameter 'contactId' is not null or undefined
        if (contactId === null || contactId === undefined) {
            throw new RequiredError("ContactsApi", "updateContactContactPerson", "contactId");
        }


        // verify required parameter 'contactPersonId' is not null or undefined
        if (contactPersonId === null || contactPersonId === undefined) {
            throw new RequiredError("ContactsApi", "updateContactContactPerson", "contactPersonId");
        }


        // verify required parameter 'contactPerson' is not null or undefined
        if (contactPerson === null || contactPerson === undefined) {
            throw new RequiredError("ContactsApi", "updateContactContactPerson", "contactPerson");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'contactId' + '}', encodeURIComponent(String(contactId)))
            .replace('{' + 'contactPersonId' + '}', encodeURIComponent(String(contactPersonId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(contactPerson, "ContactPerson", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["fiken_api_oauth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ContactsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAttachmentToContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addAttachmentToContactWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addContactPersonToContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addContactPersonToContactWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createContactWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteContactContactPerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteContactContactPersonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContactWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Contact >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Contact = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Contact", ""
            ) as Contact;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Contact = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Contact", ""
            ) as Contact;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContactContactPerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContactContactPersonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ContactPerson> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ContactPerson> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ContactPerson>", ""
            ) as Array<ContactPerson>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ContactPerson> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ContactPerson>", ""
            ) as Array<ContactPerson>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContactPerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContactPersonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ContactPerson >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ContactPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContactPerson", ""
            ) as ContactPerson;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ContactPerson = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ContactPerson", ""
            ) as ContactPerson;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContacts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getContactsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Contact> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Contact> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Contact>", ""
            ) as Array<Contact>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Contact> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Contact>", ""
            ) as Array<Contact>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateContactWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateContactContactPerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateContactContactPersonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

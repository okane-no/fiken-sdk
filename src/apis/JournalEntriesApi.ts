// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Attachment } from '../models/Attachment';
import { GeneralJournalEntryRequest } from '../models/GeneralJournalEntryRequest';
import { JournalEntry } from '../models/JournalEntry';

/**
 * no description
 */
export class JournalEntriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public async addAttachmentToJournalEntry(companySlug: string, journalEntryId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("JournalEntriesApi", "addAttachmentToJournalEntry", "companySlug");
        }


        // verify required parameter 'journalEntryId' is not null or undefined
        if (journalEntryId === null || journalEntryId === undefined) {
            throw new RequiredError("JournalEntriesApi", "addAttachmentToJournalEntry", "journalEntryId");
        }




        // Path Params
        const localVarPath = '/companies/{companySlug}/journalEntries/{journalEntryId}/attachments'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'journalEntryId' + '}', encodeURIComponent(String(journalEntryId)));

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
     * Creates a new general journal entry (fri postering).
     * @param companySlug Slug of company to retrieve
     * @param generalJournalEntryRequest 
     */
    public async createGeneralJournalEntry(companySlug: string, generalJournalEntryRequest: GeneralJournalEntryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("JournalEntriesApi", "createGeneralJournalEntry", "companySlug");
        }


        // verify required parameter 'generalJournalEntryRequest' is not null or undefined
        if (generalJournalEntryRequest === null || generalJournalEntryRequest === undefined) {
            throw new RequiredError("JournalEntriesApi", "createGeneralJournalEntry", "generalJournalEntryRequest");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/generalJournalEntries'
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
            ObjectSerializer.serialize(generalJournalEntryRequest, "GeneralJournalEntryRequest", ""),
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
     * Returns all general journal entries (posteringer) for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
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
     */
    public async getJournalEntries(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("JournalEntriesApi", "getJournalEntries", "companySlug");
        }



















        // Path Params
        const localVarPath = '/companies/{companySlug}/journalEntries'
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
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", "date"));
        }

        // Query Params
        if (dateLe !== undefined) {
            requestContext.setQueryParam("dateLe", ObjectSerializer.serialize(dateLe, "string", "date"));
        }

        // Query Params
        if (dateLt !== undefined) {
            requestContext.setQueryParam("dateLt", ObjectSerializer.serialize(dateLt, "string", "date"));
        }

        // Query Params
        if (dateGe !== undefined) {
            requestContext.setQueryParam("dateGe", ObjectSerializer.serialize(dateGe, "string", "date"));
        }

        // Query Params
        if (dateGt !== undefined) {
            requestContext.setQueryParam("dateGt", ObjectSerializer.serialize(dateGt, "string", "date"));
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
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public async getJournalEntry(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("JournalEntriesApi", "getJournalEntry", "companySlug");
        }


        // verify required parameter 'journalEntryId' is not null or undefined
        if (journalEntryId === null || journalEntryId === undefined) {
            throw new RequiredError("JournalEntriesApi", "getJournalEntry", "journalEntryId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/journalEntries/{journalEntryId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'journalEntryId' + '}', encodeURIComponent(String(journalEntryId)));

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
     * Returns all attachments for a given Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public async getJournalEntryAttachments(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("JournalEntriesApi", "getJournalEntryAttachments", "companySlug");
        }


        // verify required parameter 'journalEntryId' is not null or undefined
        if (journalEntryId === null || journalEntryId === undefined) {
            throw new RequiredError("JournalEntriesApi", "getJournalEntryAttachments", "journalEntryId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/journalEntries/{journalEntryId}/attachments'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'journalEntryId' + '}', encodeURIComponent(String(journalEntryId)));

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

}

export class JournalEntriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAttachmentToJournalEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addAttachmentToJournalEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to createGeneralJournalEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createGeneralJournalEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getJournalEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJournalEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<JournalEntry> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<JournalEntry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<JournalEntry>", ""
            ) as Array<JournalEntry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<JournalEntry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<JournalEntry>", ""
            ) as Array<JournalEntry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJournalEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJournalEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<JournalEntry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JournalEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JournalEntry", ""
            ) as JournalEntry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JournalEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JournalEntry", ""
            ) as JournalEntry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJournalEntryAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJournalEntryAttachmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Attachment> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Attachment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Attachment>", ""
            ) as Array<Attachment>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Attachment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Attachment>", ""
            ) as Array<Attachment>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

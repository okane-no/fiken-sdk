// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { InboxResult } from '../models/InboxResult';

/**
 * no description
 */
export class InboxApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Upload a document to the inbox
     * @param companySlug Slug of company to retrieve
     * @param name The name of the inbox document, usually the same as the filename
     * @param filename The filename of the file uploaded
     * @param description Additional description of the inbox document
     * @param file 
     */
    public async createInboxDocument(companySlug: string, name?: string, filename?: string, description?: string, file?: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("InboxApi", "createInboxDocument", "companySlug");
        }






        // Path Params
        const localVarPath = '/companies/{companySlug}/inbox'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

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

        if (name !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('name', name as any);
        }
        if (filename !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('filename', filename as any);
        }
        if (description !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('description', description as any);
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
     * Returns the contents of the inbox for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param status 
     * @param name Filter documents based on their name, case-insensitive substring match.
     */
    public async getInbox(companySlug: string, page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc', status?: 'all' | 'unused' | 'used', name?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("InboxApi", "getInbox", "companySlug");
        }







        // Path Params
        const localVarPath = '/companies/{companySlug}/inbox'
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
        if (sortBy !== undefined) {
            requestContext.setQueryParam("sortBy", ObjectSerializer.serialize(sortBy, "'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc'", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'all' | 'unused' | 'used'", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * Returns the inbox document with specified id
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId 
     */
    public async getInboxDocument(companySlug: string, inboxDocumentId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("InboxApi", "getInboxDocument", "companySlug");
        }


        // verify required parameter 'inboxDocumentId' is not null or undefined
        if (inboxDocumentId === null || inboxDocumentId === undefined) {
            throw new RequiredError("InboxApi", "getInboxDocument", "inboxDocumentId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/inbox/{inboxDocumentId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'inboxDocumentId' + '}', encodeURIComponent(String(inboxDocumentId)));

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

export class InboxApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInboxDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInboxDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<InboxResult> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<InboxResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<InboxResult>", ""
            ) as Array<InboxResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<InboxResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<InboxResult>", ""
            ) as Array<InboxResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxDocumentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InboxResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxResult", ""
            ) as InboxResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxResult", ""
            ) as InboxResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

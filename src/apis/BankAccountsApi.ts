// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BankAccountRequest } from '../models/BankAccountRequest';
import { BankAccountResult } from '../models/BankAccountResult';

/**
 * no description
 */
export class BankAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param companySlug Slug of company to retrieve
     * @param bankAccountRequest 
     */
    public async createBankAccount(companySlug: string, bankAccountRequest: BankAccountRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("BankAccountsApi", "createBankAccount", "companySlug");
        }


        // verify required parameter 'bankAccountRequest' is not null or undefined
        if (bankAccountRequest === null || bankAccountRequest === undefined) {
            throw new RequiredError("BankAccountsApi", "createBankAccount", "bankAccountRequest");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/bankAccounts'
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
            ObjectSerializer.serialize(bankAccountRequest, "BankAccountRequest", ""),
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
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId 
     */
    public async getBankAccount(companySlug: string, bankAccountId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("BankAccountsApi", "getBankAccount", "companySlug");
        }


        // verify required parameter 'bankAccountId' is not null or undefined
        if (bankAccountId === null || bankAccountId === undefined) {
            throw new RequiredError("BankAccountsApi", "getBankAccount", "bankAccountId");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/bankAccounts/{bankAccountId}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'bankAccountId' + '}', encodeURIComponent(String(bankAccountId)));

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
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     */
    public async getBankAccounts(companySlug: string, page?: number, pageSize?: number, inactive?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("BankAccountsApi", "getBankAccounts", "companySlug");
        }





        // Path Params
        const localVarPath = '/companies/{companySlug}/bankAccounts'
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
        if (inactive !== undefined) {
            requestContext.setQueryParam("inactive", ObjectSerializer.serialize(inactive, "boolean", ""));
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

}

export class BankAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBankAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBankAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getBankAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBankAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BankAccountResult >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BankAccountResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankAccountResult", ""
            ) as BankAccountResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BankAccountResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BankAccountResult", ""
            ) as BankAccountResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBankAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBankAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<BankAccountResult> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<BankAccountResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BankAccountResult>", ""
            ) as Array<BankAccountResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<BankAccountResult> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BankAccountResult>", ""
            ) as Array<BankAccountResult>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Account } from '../models/Account';

/**
 * no description
 */
export class AccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     */
    public async getAccount(companySlug: string, accountCode: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("AccountsApi", "getAccount", "companySlug");
        }


        // verify required parameter 'accountCode' is not null or undefined
        if (accountCode === null || accountCode === undefined) {
            throw new RequiredError("AccountsApi", "getAccount", "accountCode");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/accounts/{accountCode}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'accountCode' + '}', encodeURIComponent(String(accountCode)));

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
     * Retrieves the bookkeeping accounts for the current year 
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public async getAccounts(companySlug: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("AccountsApi", "getAccounts", "companySlug");
        }






        // Path Params
        const localVarPath = '/companies/{companySlug}/accounts'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromAccount !== undefined) {
            requestContext.setQueryParam("fromAccount", ObjectSerializer.serialize(fromAccount, "number", "int64"));
        }

        // Query Params
        if (toAccount !== undefined) {
            requestContext.setQueryParam("toAccount", ObjectSerializer.serialize(toAccount, "number", "int64"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
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

export class AccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Account >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Account", ""
            ) as Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Account", ""
            ) as Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Account> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Account> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Account>", ""
            ) as Array<Account>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Account> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Account>", ""
            ) as Array<Account>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

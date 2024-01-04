// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountBalance } from '../models/AccountBalance';

/**
 * no description
 */
export class AccountBalancesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public async getAccountBalance(companySlug: string, accountCode: string, date: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("AccountBalancesApi", "getAccountBalance", "companySlug");
        }


        // verify required parameter 'accountCode' is not null or undefined
        if (accountCode === null || accountCode === undefined) {
            throw new RequiredError("AccountBalancesApi", "getAccountBalance", "accountCode");
        }


        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new RequiredError("AccountBalancesApi", "getAccountBalance", "date");
        }


        // Path Params
        const localVarPath = '/companies/{companySlug}/accountBalances/{accountCode}'
            .replace('{' + 'companySlug' + '}', encodeURIComponent(String(companySlug)))
            .replace('{' + 'accountCode' + '}', encodeURIComponent(String(accountCode)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", "date"));
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
     * Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public async getAccountBalances(companySlug: string, date: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'companySlug' is not null or undefined
        if (companySlug === null || companySlug === undefined) {
            throw new RequiredError("AccountBalancesApi", "getAccountBalances", "companySlug");
        }


        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new RequiredError("AccountBalancesApi", "getAccountBalances", "date");
        }






        // Path Params
        const localVarPath = '/companies/{companySlug}/accountBalances'
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

        // Query Params
        if (date !== undefined) {
            requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", "date"));
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

export class AccountBalancesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountBalanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountBalance >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountBalance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBalance", ""
            ) as AccountBalance;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountBalance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBalance", ""
            ) as AccountBalance;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountBalances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccountBalancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AccountBalance> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AccountBalance> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AccountBalance>", ""
            ) as Array<AccountBalance>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AccountBalance> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AccountBalance>", ""
            ) as Array<AccountBalance>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

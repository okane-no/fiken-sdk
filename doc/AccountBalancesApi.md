# .AccountBalancesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalance**](AccountBalancesApi.md#getAccountBalance) | **GET** /companies/{companySlug}/accountBalances/{accountCode} | 
[**getAccountBalances**](AccountBalancesApi.md#getAccountBalances) | **GET** /companies/{companySlug}/accountBalances | 


# **getAccountBalance**
> AccountBalance getAccountBalance()

Retrieves the specified bookkeping account and balance for a given date.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountBalancesApi(configuration);

let body:.AccountBalancesApiGetAccountBalanceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | Code number of the bookkeeping account to retrieve
  accountCode: "accountCode_example",
  // string | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\" 
  date: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getAccountBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **accountCode** | [**string**] | Code number of the bookkeeping account to retrieve | defaults to undefined
 **date** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | defaults to undefined


### Return type

**AccountBalance**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountBalances**
> Array<AccountBalance> getAccountBalances()

Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountBalancesApi(configuration);

let body:.AccountBalancesApiGetAccountBalancesRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\" 
  date: new Date('1970-01-01').toISOString().split('T')[0];,
  // number | Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount). (optional)
  fromAccount: 1000,
  // number | Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount). (optional)
  toAccount: 2000,
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getAccountBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **date** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | defaults to undefined
 **fromAccount** | [**number**] | Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount). | (optional) defaults to undefined
 **toAccount** | [**number**] | Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount). | (optional) defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25


### Return type

**Array<AccountBalance>**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Fiken-Api-Page - From the request header <br>  * Fiken-Api-Page-Size - From the request header <br>  * Fiken-Api-Page-Count - The total number of pages in this resource with this page size <br>  * Fiken-Api-Result-Count - The total number of elements in this resource <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



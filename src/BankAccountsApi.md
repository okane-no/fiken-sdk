# .BankAccountsApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBankAccount**](BankAccountsApi.md#createBankAccount) | **POST** /companies/{companySlug}/bankAccounts | 
[**getBankAccount**](BankAccountsApi.md#getBankAccount) | **GET** /companies/{companySlug}/bankAccounts/{bankAccountId} | 
[**getBankAccounts**](BankAccountsApi.md#getBankAccounts) | **GET** /companies/{companySlug}/bankAccounts | 


# **createBankAccount**
> void createBankAccount(bankAccountRequest)

Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BankAccountsApi(configuration);

let body:.BankAccountsApiCreateBankAccountRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // BankAccountRequest
  bankAccountRequest: {
    name: "Utgiftskonto DNB",
    bankAccountNumber: "11112233334",
    bic: "DNBANOKKXXX",
    iban: "NO49 1111 2233 334",
    foreignService: "Barclays UK",
    type: "normal",
    inactive: false,
  },
};

apiInstance.createBankAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountRequest** | **BankAccountRequest**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined


### Return type

**void**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBankAccount**
> BankAccountResult getBankAccount()

Retrieves specified bank account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BankAccountsApi(configuration);

let body:.BankAccountsApiGetBankAccountRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  bankAccountId: 1,
};

apiInstance.getBankAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **bankAccountId** | [**number**] |  | defaults to undefined


### Return type

**BankAccountResult**

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

# **getBankAccounts**
> Array<BankAccountResult> getBankAccounts()

Retrieves all bank accounts associated with the company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BankAccountsApi(configuration);

let body:.BankAccountsApiGetBankAccountsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // boolean | Return all active bank accounts (false) or all inactive bank accounts (true). (optional)
  inactive: true,
};

apiInstance.getBankAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **inactive** | [**boolean**] | Return all active bank accounts (false) or all inactive bank accounts (true). | (optional) defaults to undefined


### Return type

**Array<BankAccountResult>**

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



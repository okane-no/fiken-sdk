# .CompaniesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanies**](CompaniesApi.md#getCompanies) | **GET** /companies | 
[**getCompany**](CompaniesApi.md#getCompany) | **GET** /companies/{companySlug} | 


# **getCompanies**
> Array<Company> getCompanies()

Returns all companies from the system that the user has access to

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetCompaniesRequest = {
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc' (optional)
  sortBy: "name asc",
};

apiInstance.getCompanies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **sortBy** | [**&#39;createdDate asc&#39; | &#39;createdDate desc&#39; | &#39;name asc&#39; | &#39;name desc&#39; | &#39;organizationNumber asc&#39; | &#39;organizationNumber desc&#39;**]**Array<&#39;createdDate asc&#39; &#124; &#39;createdDate desc&#39; &#124; &#39;name asc&#39; &#124; &#39;name desc&#39; &#124; &#39;organizationNumber asc&#39; &#124; &#39;organizationNumber desc&#39;>** |  | (optional) defaults to 'name asc'


### Return type

**Array<Company>**

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

# **getCompany**
> Company getCompany()

Returns company associated with slug.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CompaniesApi(configuration);

let body:.CompaniesApiGetCompanyRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
};

apiInstance.getCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined


### Return type

**Company**

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



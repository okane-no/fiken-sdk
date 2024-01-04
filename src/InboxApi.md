# .InboxApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInboxDocument**](InboxApi.md#createInboxDocument) | **POST** /companies/{companySlug}/inbox | 
[**getInbox**](InboxApi.md#getInbox) | **GET** /companies/{companySlug}/inbox | 
[**getInboxDocument**](InboxApi.md#getInboxDocument) | **GET** /companies/{companySlug}/inbox/{inboxDocumentId} | 


# **createInboxDocument**
> void createInboxDocument()

Upload a document to the inbox

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InboxApi(configuration);

let body:.InboxApiCreateInboxDocumentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | The name of the inbox document, usually the same as the filename (optional)
  name: "Invoice for August",
  // string | The filename of the file uploaded (optional)
  filename: "invoice.pdf",
  // string | Additional description of the inbox document (optional)
  description: "Uploaded with API",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.createInboxDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **name** | [**string**] | The name of the inbox document, usually the same as the filename | (optional) defaults to undefined
 **filename** | [**string**] | The filename of the file uploaded | (optional) defaults to undefined
 **description** | [**string**] | Additional description of the inbox document | (optional) defaults to undefined
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInbox**
> Array<InboxResult> getInbox()

Returns the contents of the inbox for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InboxApi(configuration);

let body:.InboxApiGetInboxRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | Sorts results in either ascending (asc) or descending (desc) order based on the parameter value. (optional)
  sortBy: "createdDate desc",
  // 'all' | 'unused' | 'used' (optional)
  status: "all",
  // string | Filter documents based on their name, case-insensitive substring match. (optional)
  name: "name_example",
};

apiInstance.getInbox(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **sortBy** | [**&#39;createdDate asc&#39; | &#39;createdDate desc&#39; | &#39;name asc&#39; | &#39;name desc&#39;**]**Array<&#39;createdDate asc&#39; &#124; &#39;createdDate desc&#39; &#124; &#39;name asc&#39; &#124; &#39;name desc&#39;>** | Sorts results in either ascending (asc) or descending (desc) order based on the parameter value. | (optional) defaults to 'createdDate desc'
 **status** | [**&#39;all&#39; | &#39;unused&#39; | &#39;used&#39;**]**Array<&#39;all&#39; &#124; &#39;unused&#39; &#124; &#39;used&#39;>** |  | (optional) defaults to 'all'
 **name** | [**string**] | Filter documents based on their name, case-insensitive substring match. | (optional) defaults to undefined


### Return type

**Array<InboxResult>**

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

# **getInboxDocument**
> InboxResult getInboxDocument()

Returns the inbox document with specified id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InboxApi(configuration);

let body:.InboxApiGetInboxDocumentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  inboxDocumentId: 1,
};

apiInstance.getInboxDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **inboxDocumentId** | [**number**] |  | defaults to undefined


### Return type

**InboxResult**

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



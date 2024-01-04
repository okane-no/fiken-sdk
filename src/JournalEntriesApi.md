# .JournalEntriesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToJournalEntry**](JournalEntriesApi.md#addAttachmentToJournalEntry) | **POST** /companies/{companySlug}/journalEntries/{journalEntryId}/attachments | 
[**createGeneralJournalEntry**](JournalEntriesApi.md#createGeneralJournalEntry) | **POST** /companies/{companySlug}/generalJournalEntries | 
[**getJournalEntries**](JournalEntriesApi.md#getJournalEntries) | **GET** /companies/{companySlug}/journalEntries | 
[**getJournalEntry**](JournalEntriesApi.md#getJournalEntry) | **GET** /companies/{companySlug}/journalEntries/{journalEntryId} | 
[**getJournalEntryAttachments**](JournalEntriesApi.md#getJournalEntryAttachments) | **GET** /companies/{companySlug}/journalEntries/{journalEntryId}/attachments | 


# **addAttachmentToJournalEntry**
> void addAttachmentToJournalEntry()

Creates and adds a new attachment to a Journal Entry

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JournalEntriesApi(configuration);

let body:.JournalEntriesApiAddAttachmentToJournalEntryRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  journalEntryId: 1,
  // string | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@18dbc1b', 'utf-8')), name: '[B@18dbc1b' },
};

apiInstance.addAttachmentToJournalEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **journalEntryId** | [**number**] |  | defaults to undefined
 **filename** | [**string**] | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf | (optional) defaults to undefined
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

# **createGeneralJournalEntry**
> void createGeneralJournalEntry(generalJournalEntryRequest)

Creates a new general journal entry (fri postering).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JournalEntriesApi(configuration);

let body:.JournalEntriesApiCreateGeneralJournalEntryRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // GeneralJournalEntryRequest
  generalJournalEntryRequest: {
    description: "description_example",
    open: false,
    journalEntries: [
      {
        transactionId: 1,
        description: "Purchase, Schweigaards Gate 34 AS (invoice nr 26083)",
        date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
        lines: [
          {
            amount: 310000,
            debitAccount: "debitAccount_example",
            debitVatCode: 1,
            creditAccount: "creditAccount_example",
            creditVatCode: 1,
          },
        ],
      },
    ],
  },
};

apiInstance.createGeneralJournalEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalJournalEntryRequest** | **GeneralJournalEntryRequest**|  |
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

# **getJournalEntries**
> Array<JournalEntry> getJournalEntries()

Returns all general journal entries (posteringer) for the specified company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JournalEntriesApi(configuration);

let body:.JournalEntriesApiGetJournalEntriesRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // string | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  date: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  dateLe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  dateLt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  dateGe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  dateGt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  lastModified: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  lastModifiedLe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  lastModifiedLt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  lastModifiedGe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  lastModifiedGt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  createdDate: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  createdDateLe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  createdDateLt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  createdDateGe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  createdDateGt: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getJournalEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **date** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **dateLe** | [**string**] | Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **dateLt** | [**string**] | Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **dateGe** | [**string**] | Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **dateGt** | [**string**] | Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModified** | [**string**] | Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLe** | [**string**] | Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLt** | [**string**] | Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGe** | [**string**] | Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGt** | [**string**] | Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDate** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateLe** | [**string**] | Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateLt** | [**string**] | Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateGe** | [**string**] | Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateGt** | [**string**] | Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined


### Return type

**Array<JournalEntry>**

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

# **getJournalEntry**
> JournalEntry getJournalEntry()

Returns all journal entries within a given company\'s Journal Entry Service

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JournalEntriesApi(configuration);

let body:.JournalEntriesApiGetJournalEntryRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  journalEntryId: 1,
};

apiInstance.getJournalEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **journalEntryId** | [**number**] |  | defaults to undefined


### Return type

**JournalEntry**

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

# **getJournalEntryAttachments**
> Array<Attachment> getJournalEntryAttachments()

Returns all attachments for a given Journal Entry

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JournalEntriesApi(configuration);

let body:.JournalEntriesApiGetJournalEntryAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  journalEntryId: 1,
};

apiInstance.getJournalEntryAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **journalEntryId** | [**number**] |  | defaults to undefined


### Return type

**Array<Attachment>**

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



# .CreditNotesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToCreditNoteDraft**](CreditNotesApi.md#addAttachmentToCreditNoteDraft) | **POST** /companies/{companySlug}/creditNotes/drafts/{draftId}/attachments | 
[**createCreditNoteCounter**](CreditNotesApi.md#createCreditNoteCounter) | **POST** /companies/{companySlug}/creditNotes/counter | 
[**createCreditNoteDraft**](CreditNotesApi.md#createCreditNoteDraft) | **POST** /companies/{companySlug}/creditNotes/drafts | 
[**createCreditNoteFromDraft**](CreditNotesApi.md#createCreditNoteFromDraft) | **POST** /companies/{companySlug}/creditNotes/drafts/{draftId}/createCreditNote | 
[**createFullCreditNote**](CreditNotesApi.md#createFullCreditNote) | **POST** /companies/{companySlug}/creditNotes/full | 
[**createPartialCreditNote**](CreditNotesApi.md#createPartialCreditNote) | **POST** /companies/{companySlug}/creditNotes/partial | 
[**deleteCreditNoteDraft**](CreditNotesApi.md#deleteCreditNoteDraft) | **DELETE** /companies/{companySlug}/creditNotes/drafts/{draftId} | 
[**getCreditNote**](CreditNotesApi.md#getCreditNote) | **GET** /companies/{companySlug}/creditNotes/{creditNoteId} | 
[**getCreditNoteCounter**](CreditNotesApi.md#getCreditNoteCounter) | **GET** /companies/{companySlug}/creditNotes/counter | 
[**getCreditNoteDraft**](CreditNotesApi.md#getCreditNoteDraft) | **GET** /companies/{companySlug}/creditNotes/drafts/{draftId} | 
[**getCreditNoteDraftAttachments**](CreditNotesApi.md#getCreditNoteDraftAttachments) | **GET** /companies/{companySlug}/creditNotes/drafts/{draftId}/attachments | 
[**getCreditNoteDrafts**](CreditNotesApi.md#getCreditNoteDrafts) | **GET** /companies/{companySlug}/creditNotes/drafts | 
[**getCreditNotes**](CreditNotesApi.md#getCreditNotes) | **GET** /companies/{companySlug}/creditNotes | 
[**sendCreditNote**](CreditNotesApi.md#sendCreditNote) | **POST** /companies/{companySlug}/creditNotes/send | 
[**updateCreditNoteDraft**](CreditNotesApi.md#updateCreditNoteDraft) | **PUT** /companies/{companySlug}/creditNotes/drafts/{draftId} | 


# **addAttachmentToCreditNoteDraft**
> void addAttachmentToCreditNoteDraft()

Creates and adds a new attachment to a credit note draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiAddAttachmentToCreditNoteDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
  // string | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // string | Not required. (optional)
  comment: "comment_example",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@59b3f754', 'utf-8')), name: '[B@59b3f754' },
};

apiInstance.addAttachmentToCreditNoteDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined
 **filename** | [**string**] | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf | (optional) defaults to undefined
 **comment** | [**string**] | Not required. | (optional) defaults to undefined
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

# **createCreditNoteCounter**
> void createCreditNoteCounter()

Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiCreateCreditNoteCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Counter (optional)
  counter: {
    value: 10000,
  },
};

apiInstance.createCreditNoteCounter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **counter** | **Counter**|  |
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
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCreditNoteDraft**
> void createCreditNoteDraft(invoiceishDraftRequest)

Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiCreateCreditNoteDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // InvoiceishDraftRequest
  invoiceishDraftRequest: {
    type: "invoice",
    uuid: "123e4567-e89b-12d3-a456-426655440000",
    issueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    daysUntilDueDate: 15,
    invoiceText: "invoiceText_example",
    yourReference: "yourReference_example",
    ourReference: "ourReference_example",
    orderReference: "orderReference_example",
    lines: [
      {
        invoiceishDraftLineId: 2888156,
        productId: 1,
        description: "Goatskin, with extra-long suede cuffs",
        unitPrice: 4550,
        vatType: "vatType_example",
        quantity: 5,
        discount: 25,
        comment: "One size fits all",
        incomeAccount: "3000",
      },
    ],
    currency: "NOK",
    bankAccountNumber: "11112233334",
    iban: "iban_example",
    bic: "bic_example",
    paymentAccount: "1920:10001",
    customerId: 7340852,
    contactPersonId: 8588156,
    projectId: 75408386,
  },
};

apiInstance.createCreditNoteDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceishDraftRequest** | **InvoiceishDraftRequest**|  |
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

# **createCreditNoteFromDraft**
> void createCreditNoteFromDraft()

Creates a credit note from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiCreateCreditNoteFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createCreditNoteFromDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


### Return type

**void**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFullCreditNote**
> void createFullCreditNote(fullCreditNoteRequest)

Creates a new credit note that covers the full amount of the associated invoice.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiCreateFullCreditNoteRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // FullCreditNoteRequest
  fullCreditNoteRequest: {
    issueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    invoiceId: 2888156,
    creditNoteText: "Invoice for services rendered during the Oslo Knitting Festival.",
  },
};

apiInstance.createFullCreditNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullCreditNoteRequest** | **FullCreditNoteRequest**|  |
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

# **createPartialCreditNote**
> void createPartialCreditNote(partialCreditNoteRequest)

Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiCreatePartialCreditNoteRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // PartialCreditNoteRequest
  partialCreditNoteRequest: {
    ourReference: "ourReference_example",
    yourReference: "yourReference_example",
    orderReference: "orderReference_example",
    project: 1,
    currency: "NOK",
    issueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    invoiceId: 2888156,
    contactId: 3588152,
    contactPersonId: 3588152,
    creditNoteText: "Invoice for services rendered during the Oslo Knitting Festival.",
    lines: [
      {
        incomeAccount: "3000",
        vatType: "HIGH",
        unitPrice: 4550,
        quantity: 5,
        discount: 25,
        productId: 2888156,
        description: "Goatskin, with extra-long suede cuffs",
        comment: "One size fits all",
      },
    ],
  },
};

apiInstance.createPartialCreditNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialCreditNoteRequest** | **PartialCreditNoteRequest**|  |
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

# **deleteCreditNoteDraft**
> void deleteCreditNoteDraft()

Delete credit note draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiDeleteCreditNoteDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deleteCreditNoteDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


### Return type

**void**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCreditNote**
> CreditNoteResult getCreditNote()

Returns credit note with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNoteRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
  creditNoteId: "creditNoteId_example",
};

apiInstance.getCreditNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **creditNoteId** | [**string**] | The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber  | defaults to undefined


### Return type

**CreditNoteResult**

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

# **getCreditNoteCounter**
> Counter getCreditNoteCounter()

Retrieves the counter for credit notes if it has been created 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNoteCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
};

apiInstance.getCreditNoteCounter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined


### Return type

**Counter**

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

# **getCreditNoteDraft**
> InvoiceishDraftResult getCreditNoteDraft()

Returns credit note draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNoteDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getCreditNoteDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


### Return type

**InvoiceishDraftResult**

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

# **getCreditNoteDraftAttachments**
> Array<Attachment> getCreditNoteDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNoteDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getCreditNoteDraftAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


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

# **getCreditNoteDrafts**
> Array<InvoiceishDraftResult> getCreditNoteDrafts()

Returns all credit note drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNoteDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getCreditNoteDrafts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25


### Return type

**Array<InvoiceishDraftResult>**

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

# **getCreditNotes**
> Array<CreditNoteResult> getCreditNotes()

Returns all credit notes for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiGetCreditNotesRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // string | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  issueDate: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  issueDateLe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  issueDateLt: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  issueDateGe: new Date('1970-01-01').toISOString().split('T')[0];,
  // string | Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \"1970-01-01\"  (optional)
  issueDateGt: new Date('1970-01-01').toISOString().split('T')[0];,
  // number | Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call.  (optional)
  customerId: 1,
  // boolean | When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes that have not been fully settled.  (optional)
  settled: true,
  // string | Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to \"uavhengig kreditnotaer\". (optional)
  creditNoteDraftUuid: "creditNoteDraftUuid_example",
};

apiInstance.getCreditNotes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **issueDate** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **issueDateLe** | [**string**] | Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **issueDateLt** | [**string**] | Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **issueDateGe** | [**string**] | Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **issueDateGt** | [**string**] | Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **customerId** | [**number**] | Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call.  | (optional) defaults to undefined
 **settled** | [**boolean**] | When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes that have not been fully settled.  | (optional) defaults to undefined
 **creditNoteDraftUuid** | [**string**] | Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to \&quot;uavhengig kreditnotaer\&quot;. | (optional) defaults to undefined


### Return type

**Array<CreditNoteResult>**

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

# **sendCreditNote**
> void sendCreditNote(sendCreditNoteRequest)

Sends the specified document

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiSendCreditNoteRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // SendCreditNoteRequest
  sendCreditNoteRequest: null,
};

apiInstance.sendCreditNote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendCreditNoteRequest** | **SendCreditNoteRequest**|  |
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
**200** | Sent |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCreditNoteDraft**
> void updateCreditNoteDraft(invoiceishDraftRequest)

Updates credit note draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditNotesApi(configuration);

let body:.CreditNotesApiUpdateCreditNoteDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
  // InvoiceishDraftRequest
  invoiceishDraftRequest: {
    type: "invoice",
    uuid: "123e4567-e89b-12d3-a456-426655440000",
    issueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    daysUntilDueDate: 15,
    invoiceText: "invoiceText_example",
    yourReference: "yourReference_example",
    ourReference: "ourReference_example",
    orderReference: "orderReference_example",
    lines: [
      {
        invoiceishDraftLineId: 2888156,
        productId: 1,
        description: "Goatskin, with extra-long suede cuffs",
        unitPrice: 4550,
        vatType: "vatType_example",
        quantity: 5,
        discount: 25,
        comment: "One size fits all",
        incomeAccount: "3000",
      },
    ],
    currency: "NOK",
    bankAccountNumber: "11112233334",
    iban: "iban_example",
    bic: "bic_example",
    paymentAccount: "1920:10001",
    customerId: 7340852,
    contactPersonId: 8588156,
    projectId: 75408386,
  },
};

apiInstance.updateCreditNoteDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceishDraftRequest** | **InvoiceishDraftRequest**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


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



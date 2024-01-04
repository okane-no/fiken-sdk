# .InvoicesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToInvoice**](InvoicesApi.md#addAttachmentToInvoice) | **POST** /companies/{companySlug}/invoices/{invoiceId}/attachments | 
[**addAttachmentToInvoiceDraft**](InvoicesApi.md#addAttachmentToInvoiceDraft) | **POST** /companies/{companySlug}/invoices/drafts/{draftId}/attachments | 
[**createInvoice**](InvoicesApi.md#createInvoice) | **POST** /companies/{companySlug}/invoices | 
[**createInvoiceCounter**](InvoicesApi.md#createInvoiceCounter) | **POST** /companies/{companySlug}/invoices/counter | 
[**createInvoiceDraft**](InvoicesApi.md#createInvoiceDraft) | **POST** /companies/{companySlug}/invoices/drafts | 
[**createInvoiceFromDraft**](InvoicesApi.md#createInvoiceFromDraft) | **POST** /companies/{companySlug}/invoices/drafts/{draftId}/createInvoice | 
[**deleteInvoiceDraft**](InvoicesApi.md#deleteInvoiceDraft) | **DELETE** /companies/{companySlug}/invoices/drafts/{draftId} | 
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /companies/{companySlug}/invoices/{invoiceId} | 
[**getInvoiceAttachments**](InvoicesApi.md#getInvoiceAttachments) | **GET** /companies/{companySlug}/invoices/{invoiceId}/attachments | 
[**getInvoiceCounter**](InvoicesApi.md#getInvoiceCounter) | **GET** /companies/{companySlug}/invoices/counter | 
[**getInvoiceDraft**](InvoicesApi.md#getInvoiceDraft) | **GET** /companies/{companySlug}/invoices/drafts/{draftId} | 
[**getInvoiceDraftAttachments**](InvoicesApi.md#getInvoiceDraftAttachments) | **GET** /companies/{companySlug}/invoices/drafts/{draftId}/attachments | 
[**getInvoiceDrafts**](InvoicesApi.md#getInvoiceDrafts) | **GET** /companies/{companySlug}/invoices/drafts | 
[**getInvoices**](InvoicesApi.md#getInvoices) | **GET** /companies/{companySlug}/invoices | 
[**sendInvoice**](InvoicesApi.md#sendInvoice) | **POST** /companies/{companySlug}/invoices/send | 
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **PATCH** /companies/{companySlug}/invoices/{invoiceId} | 
[**updateInvoiceDraft**](InvoicesApi.md#updateInvoiceDraft) | **PUT** /companies/{companySlug}/invoices/drafts/{draftId} | 


# **addAttachmentToInvoice**
> void addAttachmentToInvoice()

Creates and adds a new attachment to an Invoice

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiAddAttachmentToInvoiceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
  invoiceId: 1,
  // string | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@2a510e0e', 'utf-8')), name: '[B@2a510e0e' },
};

apiInstance.addAttachmentToInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **invoiceId** | [**number**] | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber  | defaults to undefined
 **filename** | [**string**] | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf | (optional) defaults to undefined
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

# **addAttachmentToInvoiceDraft**
> void addAttachmentToInvoiceDraft()

Creates and adds a new attachment to an invoice draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiAddAttachmentToInvoiceDraftRequest = {
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

apiInstance.addAttachmentToInvoiceDraft(body).then((data:any) => {
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

# **createInvoice**
> void createInvoice(invoiceRequest)

Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateInvoiceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // InvoiceRequest
  invoiceRequest: {
    uuid: "123e4567-e89b-12d3-a456-426655440000",
    issueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    dueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    lines: [
      {
        net: 4500,
        vat: 500,
        vatType: "HIGH",
        gross: 5000,
        vatInPercent: 25,
        unitPrice: 4550,
        quantity: 5,
        discount: 25,
        productName: "Gardening Gloves VI2",
        productId: 2888156,
        description: "Goatskin, with extra-long suede cuffs",
        comment: "One size fits all",
        incomeAccount: "3000",
      },
    ],
    ourReference: "ourReference_example",
    yourReference: "yourReference_example",
    orderReference: "orderReference_example",
    customerId: 2888156,
    contactPersonId: 8588156,
    bankAccountCode: "1920:10002",
    currency: "NOK",
    invoiceText: "Invoice for services rendered during the Oslo Knitting Festival.",
    cash: false,
    paymentAccount: "1920:10001",
    projectId: 15124866,
  },
};

apiInstance.createInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceRequest** | **InvoiceRequest**|  |
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

# **createInvoiceCounter**
> void createInvoiceCounter()

Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateInvoiceCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Counter (optional)
  counter: {
    value: 10000,
  },
};

apiInstance.createInvoiceCounter(body).then((data:any) => {
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

# **createInvoiceDraft**
> void createInvoiceDraft(invoiceishDraftRequest)

Creates an invoice draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateInvoiceDraftRequest = {
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

apiInstance.createInvoiceDraft(body).then((data:any) => {
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

# **createInvoiceFromDraft**
> void createInvoiceFromDraft()

Creates an invoice from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateInvoiceFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createInvoiceFromDraft(body).then((data:any) => {
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

# **deleteInvoiceDraft**
> void deleteInvoiceDraft()

Delete invoice draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiDeleteInvoiceDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deleteInvoiceDraft(body).then((data:any) => {
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

# **getInvoice**
> InvoiceResult getInvoice()

Returns invoice with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
  invoiceId: 1,
};

apiInstance.getInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **invoiceId** | [**number**] | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber  | defaults to undefined


### Return type

**InvoiceResult**

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

# **getInvoiceAttachments**
> Array<Attachment> getInvoiceAttachments()

Returns all attachments for a given Invoice

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
  invoiceId: 1,
};

apiInstance.getInvoiceAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **invoiceId** | [**number**] | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber  | defaults to undefined


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

# **getInvoiceCounter**
> Counter getInvoiceCounter()

Retrieves the counter for invoices if it has been created 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
};

apiInstance.getInvoiceCounter(body).then((data:any) => {
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

# **getInvoiceDraft**
> InvoiceishDraftResult getInvoiceDraft()

Returns invoice draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getInvoiceDraft(body).then((data:any) => {
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

# **getInvoiceDraftAttachments**
> Array<Attachment> getInvoiceDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getInvoiceDraftAttachments(body).then((data:any) => {
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

# **getInvoiceDrafts**
> Array<InvoiceishDraftResult> getInvoiceDrafts()

Returns all invoice drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoiceDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // string | Filter based on order reference for a given invoice draft (optional)
  orderReference: "orderReference_example",
  // string | Filter based on the UUID of the draft. (optional)
  uuid: "uuid_example",
};

apiInstance.getInvoiceDrafts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **orderReference** | [**string**] | Filter based on order reference for a given invoice draft | (optional) defaults to undefined
 **uuid** | [**string**] | Filter based on the UUID of the draft. | (optional) defaults to undefined


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

# **getInvoices**
> Array<InvoiceResult> getInvoices()

Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiGetInvoicesRequest = {
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
  // number | Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call.  (optional)
  customerId: 1,
  // boolean | When set to true, returns only invoices that have been settled. Otherwise false returns all invoices that have not been fully settled.  (optional)
  settled: true,
  // string | Filter based on order reference for a given invoice (optional)
  orderReference: "orderReference_example",
  // string | Filter based on the UUID of the invoice draft that was used to create a given invoice (optional)
  invoiceDraftUuid: "invoiceDraftUuid_example",
  // string (optional)
  invoiceNumber: "invoiceNumber_example",
};

apiInstance.getInvoices(body).then((data:any) => {
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
 **lastModified** | [**string**] | Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLe** | [**string**] | Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLt** | [**string**] | Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGe** | [**string**] | Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGt** | [**string**] | Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **customerId** | [**number**] | Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call.  | (optional) defaults to undefined
 **settled** | [**boolean**] | When set to true, returns only invoices that have been settled. Otherwise false returns all invoices that have not been fully settled.  | (optional) defaults to undefined
 **orderReference** | [**string**] | Filter based on order reference for a given invoice | (optional) defaults to undefined
 **invoiceDraftUuid** | [**string**] | Filter based on the UUID of the invoice draft that was used to create a given invoice | (optional) defaults to undefined
 **invoiceNumber** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<InvoiceResult>**

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

# **sendInvoice**
> void sendInvoice(sendInvoiceRequest)

Sends the specified document

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiSendInvoiceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // SendInvoiceRequest
  sendInvoiceRequest: null,
};

apiInstance.sendInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendInvoiceRequest** | **SendInvoiceRequest**|  |
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

# **updateInvoice**
> void updateInvoice(updateInvoiceRequest)

Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiUpdateInvoiceRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
  invoiceId: 1,
  // UpdateInvoiceRequest
  updateInvoiceRequest: {
    newDueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    sentManually: true,
  },
};

apiInstance.updateInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInvoiceRequest** | **UpdateInvoiceRequest**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **invoiceId** | [**number**] | The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber  | defaults to undefined


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
**200** | OK |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateInvoiceDraft**
> void updateInvoiceDraft(invoiceishDraftRequest)

Updates invoice draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiUpdateInvoiceDraftRequest = {
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

apiInstance.updateInvoiceDraft(body).then((data:any) => {
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



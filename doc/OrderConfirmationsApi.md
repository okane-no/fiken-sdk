# .OrderConfirmationsApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToOrderConfirmationDraft**](OrderConfirmationsApi.md#addAttachmentToOrderConfirmationDraft) | **POST** /companies/{companySlug}/orderConfirmations/drafts/{draftId}/attachments | 
[**createInvoiceDraftFromOrderConfirmation**](OrderConfirmationsApi.md#createInvoiceDraftFromOrderConfirmation) | **POST** /companies/{companySlug}/orderConfirmations/{confirmationId}/createInvoiceDraft | 
[**createOrderConfirmationCounter**](OrderConfirmationsApi.md#createOrderConfirmationCounter) | **POST** /companies/{companySlug}/orderConfirmations/counter | 
[**createOrderConfirmationDraft**](OrderConfirmationsApi.md#createOrderConfirmationDraft) | **POST** /companies/{companySlug}/orderConfirmations/drafts | 
[**createOrderConfirmationFromDraft**](OrderConfirmationsApi.md#createOrderConfirmationFromDraft) | **POST** /companies/{companySlug}/orderConfirmations/drafts/{draftId}/createOrderConfirmation | 
[**deleteOrderConfirmationDraft**](OrderConfirmationsApi.md#deleteOrderConfirmationDraft) | **DELETE** /companies/{companySlug}/orderConfirmations/drafts/{draftId} | 
[**getOrderConfirmation**](OrderConfirmationsApi.md#getOrderConfirmation) | **GET** /companies/{companySlug}/orderConfirmations/{confirmationId} | 
[**getOrderConfirmationCounter**](OrderConfirmationsApi.md#getOrderConfirmationCounter) | **GET** /companies/{companySlug}/orderConfirmations/counter | 
[**getOrderConfirmationDraft**](OrderConfirmationsApi.md#getOrderConfirmationDraft) | **GET** /companies/{companySlug}/orderConfirmations/drafts/{draftId} | 
[**getOrderConfirmationDraftAttachments**](OrderConfirmationsApi.md#getOrderConfirmationDraftAttachments) | **GET** /companies/{companySlug}/orderConfirmations/drafts/{draftId}/attachments | 
[**getOrderConfirmationDrafts**](OrderConfirmationsApi.md#getOrderConfirmationDrafts) | **GET** /companies/{companySlug}/orderConfirmations/drafts | 
[**getOrderConfirmations**](OrderConfirmationsApi.md#getOrderConfirmations) | **GET** /companies/{companySlug}/orderConfirmations | 
[**updateOrderConfirmationDraft**](OrderConfirmationsApi.md#updateOrderConfirmationDraft) | **PUT** /companies/{companySlug}/orderConfirmations/drafts/{draftId} | 


# **addAttachmentToOrderConfirmationDraft**
> void addAttachmentToOrderConfirmationDraft()

Creates and adds a new attachment to an order confirmation draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiAddAttachmentToOrderConfirmationDraftRequest = {
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

apiInstance.addAttachmentToOrderConfirmationDraft(body).then((data:any) => {
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

# **createInvoiceDraftFromOrderConfirmation**
> void createInvoiceDraftFromOrderConfirmation()

Creates an invoice draft from an order confirmation

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiCreateInvoiceDraftFromOrderConfirmationRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
  confirmationId: "confirmationId_example",
};

apiInstance.createInvoiceDraftFromOrderConfirmation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **confirmationId** | [**string**] | The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call  | defaults to undefined


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

# **createOrderConfirmationCounter**
> void createOrderConfirmationCounter()

Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiCreateOrderConfirmationCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Counter (optional)
  counter: {
    value: 10000,
  },
};

apiInstance.createOrderConfirmationCounter(body).then((data:any) => {
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

# **createOrderConfirmationDraft**
> void createOrderConfirmationDraft(invoiceishDraftRequest)

Creates an order confirmation draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiCreateOrderConfirmationDraftRequest = {
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

apiInstance.createOrderConfirmationDraft(body).then((data:any) => {
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

# **createOrderConfirmationFromDraft**
> void createOrderConfirmationFromDraft()

Creates an order confirmation from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiCreateOrderConfirmationFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createOrderConfirmationFromDraft(body).then((data:any) => {
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

# **deleteOrderConfirmationDraft**
> void deleteOrderConfirmationDraft()

Delete order confirmation draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiDeleteOrderConfirmationDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deleteOrderConfirmationDraft(body).then((data:any) => {
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

# **getOrderConfirmation**
> OrderConfirmation getOrderConfirmation()

Returns order confirmation with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
  confirmationId: "confirmationId_example",
};

apiInstance.getOrderConfirmation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **confirmationId** | [**string**] | The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call  | defaults to undefined


### Return type

**OrderConfirmation**

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

# **getOrderConfirmationCounter**
> Counter getOrderConfirmationCounter()

Retrieves the counter for order confirmations if it has been created 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
};

apiInstance.getOrderConfirmationCounter(body).then((data:any) => {
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

# **getOrderConfirmationDraft**
> InvoiceishDraftResult getOrderConfirmationDraft()

Returns order confirmation draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getOrderConfirmationDraft(body).then((data:any) => {
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

# **getOrderConfirmationDraftAttachments**
> Array<Attachment> getOrderConfirmationDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getOrderConfirmationDraftAttachments(body).then((data:any) => {
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

# **getOrderConfirmationDrafts**
> Array<InvoiceishDraftResult> getOrderConfirmationDrafts()

Returns all order confirmation drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getOrderConfirmationDrafts(body).then((data:any) => {
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

# **getOrderConfirmations**
> Array<OrderConfirmation> getOrderConfirmations()

Returns all order confirmations for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiGetOrderConfirmationsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getOrderConfirmations(body).then((data:any) => {
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

**Array<OrderConfirmation>**

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

# **updateOrderConfirmationDraft**
> void updateOrderConfirmationDraft(invoiceishDraftRequest)

Updates order confirmation draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderConfirmationsApi(configuration);

let body:.OrderConfirmationsApiUpdateOrderConfirmationDraftRequest = {
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

apiInstance.updateOrderConfirmationDraft(body).then((data:any) => {
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



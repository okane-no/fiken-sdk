# .PurchasesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToPurchase**](PurchasesApi.md#addAttachmentToPurchase) | **POST** /companies/{companySlug}/purchases/{purchaseId}/attachments | 
[**addAttachmentToPurchaseDraft**](PurchasesApi.md#addAttachmentToPurchaseDraft) | **POST** /companies/{companySlug}/purchases/drafts/{draftId}/attachments | 
[**createPurchase**](PurchasesApi.md#createPurchase) | **POST** /companies/{companySlug}/purchases | 
[**createPurchaseDraft**](PurchasesApi.md#createPurchaseDraft) | **POST** /companies/{companySlug}/purchases/drafts | 
[**createPurchaseFromDraft**](PurchasesApi.md#createPurchaseFromDraft) | **POST** /companies/{companySlug}/purchases/drafts/{draftId}/createPurchase | 
[**createPurchasePayment**](PurchasesApi.md#createPurchasePayment) | **POST** /companies/{companySlug}/purchases/{purchaseId}/payments | 
[**deletePurchase**](PurchasesApi.md#deletePurchase) | **PATCH** /companies/{companySlug}/purchases/{purchaseId}/delete | 
[**deletePurchaseDraft**](PurchasesApi.md#deletePurchaseDraft) | **DELETE** /companies/{companySlug}/purchases/drafts/{draftId} | 
[**getPurchase**](PurchasesApi.md#getPurchase) | **GET** /companies/{companySlug}/purchases/{purchaseId} | 
[**getPurchaseAttachments**](PurchasesApi.md#getPurchaseAttachments) | **GET** /companies/{companySlug}/purchases/{purchaseId}/attachments | 
[**getPurchaseDraft**](PurchasesApi.md#getPurchaseDraft) | **GET** /companies/{companySlug}/purchases/drafts/{draftId} | 
[**getPurchaseDraftAttachments**](PurchasesApi.md#getPurchaseDraftAttachments) | **GET** /companies/{companySlug}/purchases/drafts/{draftId}/attachments | 
[**getPurchaseDrafts**](PurchasesApi.md#getPurchaseDrafts) | **GET** /companies/{companySlug}/purchases/drafts | 
[**getPurchasePayment**](PurchasesApi.md#getPurchasePayment) | **GET** /companies/{companySlug}/purchases/{purchaseId}/payments/{paymentId} | 
[**getPurchasePayments**](PurchasesApi.md#getPurchasePayments) | **GET** /companies/{companySlug}/purchases/{purchaseId}/payments | 
[**getPurchases**](PurchasesApi.md#getPurchases) | **GET** /companies/{companySlug}/purchases | 
[**updatePurchaseDraft**](PurchasesApi.md#updatePurchaseDraft) | **PUT** /companies/{companySlug}/purchases/drafts/{draftId} | 


# **addAttachmentToPurchase**
> void addAttachmentToPurchase()

Creates and adds a new attachment to a Purchase

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiAddAttachmentToPurchaseRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
  // string | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // boolean | True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. (optional)
  attachToPayment: true,
  // boolean | True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. (optional)
  attachToSale: true,
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@66dd04e2', 'utf-8')), name: '[B@66dd04e2' },
};

apiInstance.addAttachmentToPurchase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined
 **filename** | [**string**] | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf | (optional) defaults to undefined
 **attachToPayment** | [**boolean**] | True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. | (optional) defaults to undefined
 **attachToSale** | [**boolean**] | True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. | (optional) defaults to undefined
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

# **addAttachmentToPurchaseDraft**
> void addAttachmentToPurchaseDraft()

Creates and adds a new attachment to a draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiAddAttachmentToPurchaseDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
  // string | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@18dbc1b', 'utf-8')), name: '[B@18dbc1b' },
};

apiInstance.addAttachmentToPurchaseDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined
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

# **createPurchase**
> void createPurchase(purchaseRequest)

Creates a new purchase.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiCreatePurchaseRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // PurchaseRequest
  purchaseRequest: {
    identifier: "identifier_example",
    date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    dueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    kind: "cash_purchase",
    lines: [
      {
        description: "description_example",
        netPrice: 4500,
        vat: 500,
        account: "1500",
        vatType: "vatType_example",
        netPriceInCurrency: 4500,
        vatInCurrency: 500,
        projectId: 2815556,
      },
    ],
    supplierId: 2888156,
    currency: "NOK",
    paymentAccount: "1920:10001",
    paymentDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    kid: "5855454756",
    projectId: 2888156,
  },
};

apiInstance.createPurchase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseRequest** | **PurchaseRequest**|  |
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

# **createPurchaseDraft**
> void createPurchaseDraft(draftRequest)

Creates a purchase draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiCreatePurchaseDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // DraftRequest
  draftRequest: {
    invoiceIssueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    dueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    invoiceNumber: "NOEE2888156",
    contactId: 2888156,
    projectId: 2888156,
    cash: true,
    currency: "NOK",
    kid: "5855454756",
    paid: true,
    payments: [
      {
        date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
        account: "1920:10001",
        amount: 34000,
        currency: "NOK",
        fee: 1,
      },
    ],
    lines: [
      {
        text: "text_example",
        vatType: "vatType_example",
        incomeAccount: "3000",
        net: 25000,
        gross: 30000,
        projectId: 2888156,
      },
    ],
  },
};

apiInstance.createPurchaseDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftRequest** | **DraftRequest**|  |
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

# **createPurchaseFromDraft**
> void createPurchaseFromDraft()

Creates a purchase from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiCreatePurchaseFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createPurchaseFromDraft(body).then((data:any) => {
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

# **createPurchasePayment**
> void createPurchasePayment(payment)

Creates a new payment for a purchase

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiCreatePurchasePaymentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
  // Payment
  payment: {
    date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    account: "1920:10001",
    amount: 34000,
    currency: "NOK",
    fee: 1,
  },
};

apiInstance.createPurchasePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | **Payment**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined


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

# **deletePurchase**
> PurchaseResult deletePurchase()

Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiDeletePurchaseRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
  // string | Required description for deleting the purchase
  description: "description_example",
};

apiInstance.deletePurchase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined
 **description** | [**string**] | Required description for deleting the purchase | defaults to undefined


### Return type

**PurchaseResult**

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

# **deletePurchaseDraft**
> void deletePurchaseDraft()

Delete draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiDeletePurchaseDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deletePurchaseDraft(body).then((data:any) => {
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

# **getPurchase**
> PurchaseResult getPurchase()

Returns purchase with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchaseRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
};

apiInstance.getPurchase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined


### Return type

**PurchaseResult**

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

# **getPurchaseAttachments**
> Array<Attachment> getPurchaseAttachments()

Returns all attachments for specified purchase.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchaseAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
};

apiInstance.getPurchaseAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined


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

# **getPurchaseDraft**
> DraftResult getPurchaseDraft()

Returns draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchaseDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getPurchaseDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **draftId** | [**number**] | The draftId (primary key of the returned object) is returned in the GET all drafts call.  | defaults to undefined


### Return type

**DraftResult**

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

# **getPurchaseDraftAttachments**
> Array<Attachment> getPurchaseDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchaseDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getPurchaseDraftAttachments(body).then((data:any) => {
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

# **getPurchaseDrafts**
> Array<DraftResult> getPurchaseDrafts()

Returns all purchase drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchaseDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getPurchaseDrafts(body).then((data:any) => {
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

**Array<DraftResult>**

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

# **getPurchasePayment**
> Payment getPurchasePayment()

Returns given payment for specified purchase

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchasePaymentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
  // number
  paymentId: 1,
};

apiInstance.getPurchasePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined
 **paymentId** | [**number**] |  | defaults to undefined


### Return type

**Payment**

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

# **getPurchasePayments**
> Array<Payment> getPurchasePayments()

Returns all purchases for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchasePaymentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  purchaseId: 1,
};

apiInstance.getPurchasePayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **purchaseId** | [**number**] |  | defaults to undefined


### Return type

**Array<Payment>**

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

# **getPurchases**
> Array<PurchaseResult> getPurchases()

Returns all purchases for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiGetPurchasesRequest = {
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
  // 'date asc' | 'date desc' | Sorts results in either ascending (asc) or descending (desc) order based on the parameter value. (optional)
  sortBy: "date asc",
  // boolean | When set to true, returns only purchases that have been paid. Otherwise false returns all purchases that have not been fully settled.  (optional)
  paid: true,
};

apiInstance.getPurchases(body).then((data:any) => {
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
 **sortBy** | [**&#39;date asc&#39; | &#39;date desc&#39;**]**Array<&#39;date asc&#39; &#124; &#39;date desc&#39;>** | Sorts results in either ascending (asc) or descending (desc) order based on the parameter value. | (optional) defaults to 'date asc'
 **paid** | [**boolean**] | When set to true, returns only purchases that have been paid. Otherwise false returns all purchases that have not been fully settled.  | (optional) defaults to undefined


### Return type

**Array<PurchaseResult>**

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

# **updatePurchaseDraft**
> void updatePurchaseDraft(draftRequest)

Updates draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PurchasesApi(configuration);

let body:.PurchasesApiUpdatePurchaseDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
  // DraftRequest
  draftRequest: {
    invoiceIssueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    dueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    invoiceNumber: "NOEE2888156",
    contactId: 2888156,
    projectId: 2888156,
    cash: true,
    currency: "NOK",
    kid: "5855454756",
    paid: true,
    payments: [
      {
        date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
        account: "1920:10001",
        amount: 34000,
        currency: "NOK",
        fee: 1,
      },
    ],
    lines: [
      {
        text: "text_example",
        vatType: "vatType_example",
        incomeAccount: "3000",
        net: 25000,
        gross: 30000,
        projectId: 2888156,
      },
    ],
  },
};

apiInstance.updatePurchaseDraft(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **draftRequest** | **DraftRequest**|  |
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



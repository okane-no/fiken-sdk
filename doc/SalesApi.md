# .SalesApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToSale**](SalesApi.md#addAttachmentToSale) | **POST** /companies/{companySlug}/sales/{saleId}/attachments | 
[**addAttachmentToSaleDraft**](SalesApi.md#addAttachmentToSaleDraft) | **POST** /companies/{companySlug}/sales/drafts/{draftId}/attachments | 
[**createSale**](SalesApi.md#createSale) | **POST** /companies/{companySlug}/sales | 
[**createSaleDraft**](SalesApi.md#createSaleDraft) | **POST** /companies/{companySlug}/sales/drafts | 
[**createSaleFromDraft**](SalesApi.md#createSaleFromDraft) | **POST** /companies/{companySlug}/sales/drafts/{draftId}/createSale | 
[**createSalePayment**](SalesApi.md#createSalePayment) | **POST** /companies/{companySlug}/sales/{saleId}/payments | 
[**deleteSale**](SalesApi.md#deleteSale) | **PATCH** /companies/{companySlug}/sales/{saleId}/delete | 
[**deleteSaleDraft**](SalesApi.md#deleteSaleDraft) | **DELETE** /companies/{companySlug}/sales/drafts/{draftId} | 
[**getSale**](SalesApi.md#getSale) | **GET** /companies/{companySlug}/sales/{saleId} | 
[**getSaleAttachments**](SalesApi.md#getSaleAttachments) | **GET** /companies/{companySlug}/sales/{saleId}/attachments | 
[**getSaleDraft**](SalesApi.md#getSaleDraft) | **GET** /companies/{companySlug}/sales/drafts/{draftId} | 
[**getSaleDraftAttachments**](SalesApi.md#getSaleDraftAttachments) | **GET** /companies/{companySlug}/sales/drafts/{draftId}/attachments | 
[**getSaleDrafts**](SalesApi.md#getSaleDrafts) | **GET** /companies/{companySlug}/sales/drafts | 
[**getSalePayment**](SalesApi.md#getSalePayment) | **GET** /companies/{companySlug}/sales/{saleId}/payments/{paymentId} | 
[**getSalePayments**](SalesApi.md#getSalePayments) | **GET** /companies/{companySlug}/sales/{saleId}/payments | 
[**getSales**](SalesApi.md#getSales) | **GET** /companies/{companySlug}/sales | 
[**settledSale**](SalesApi.md#settledSale) | **PATCH** /companies/{companySlug}/sales/{saleId}/settled | 
[**updateSaleDraft**](SalesApi.md#updateSaleDraft) | **PUT** /companies/{companySlug}/sales/drafts/{draftId} | 


# **addAttachmentToSale**
> void addAttachmentToSale()

Creates and adds a new attachment to a Sale

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiAddAttachmentToSaleRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
  // string | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // boolean | True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. (optional)
  attachToPayment: true,
  // boolean | True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. (optional)
  attachToSale: true,
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@23d978b', 'utf-8')), name: '[B@23d978b' },
};

apiInstance.addAttachmentToSale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined
 **filename** | [**string**] | The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf | (optional) defaults to undefined
 **attachToPayment** | [**boolean**] | True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. | (optional) defaults to true
 **attachToSale** | [**boolean**] | True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true. | (optional) defaults to true
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

# **addAttachmentToSaleDraft**
> void addAttachmentToSaleDraft()

Creates and adds a new attachment to a draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiAddAttachmentToSaleDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
  // string | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@18dbc1b', 'utf-8')), name: '[B@18dbc1b' },
};

apiInstance.addAttachmentToSaleDraft(body).then((data:any) => {
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

# **createSale**
> void createSale(saleRequest)

Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiCreateSaleRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // SaleRequest
  saleRequest: {
    saleNumber: "XK455L",
    date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    kind: "external_invoice",
    totalPaid: 524500,
    totalPaidInCurrency: 634550,
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
    customerId: 1,
    currency: "NOK",
    dueDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    kid: "5855454756",
    paymentAccount: "1920:10001",
    paymentDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    paymentFee: 634550,
    projectId: 2888156,
  },
};

apiInstance.createSale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saleRequest** | **SaleRequest**|  |
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

# **createSaleDraft**
> void createSaleDraft(draftRequest)

Creates a sale draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiCreateSaleDraftRequest = {
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

apiInstance.createSaleDraft(body).then((data:any) => {
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

# **createSaleFromDraft**
> void createSaleFromDraft()

Creates a sale from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiCreateSaleFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createSaleFromDraft(body).then((data:any) => {
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

# **createSalePayment**
> void createSalePayment(payment)

Creates a new payment for a given sale.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiCreateSalePaymentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
  // Payment
  payment: {
    date: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    account: "1920:10001",
    amount: 34000,
    currency: "NOK",
    fee: 1,
  },
};

apiInstance.createSalePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | **Payment**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined


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

# **deleteSale**
> SaleResult deleteSale()

Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiDeleteSaleRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
  // string | Required description for deleting the sale
  description: "description_example",
};

apiInstance.deleteSale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined
 **description** | [**string**] | Required description for deleting the sale | defaults to undefined


### Return type

**SaleResult**

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

# **deleteSaleDraft**
> void deleteSaleDraft()

Delete draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiDeleteSaleDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deleteSaleDraft(body).then((data:any) => {
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

# **getSale**
> SaleResult getSale()

Returns sale with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSaleRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
};

apiInstance.getSale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined


### Return type

**SaleResult**

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

# **getSaleAttachments**
> Array<Attachment> getSaleAttachments()

Returns all attachments for specified sale.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSaleAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
};

apiInstance.getSaleAttachments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined


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

# **getSaleDraft**
> DraftResult getSaleDraft()

Returns draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSaleDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getSaleDraft(body).then((data:any) => {
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

# **getSaleDraftAttachments**
> Array<Attachment> getSaleDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSaleDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getSaleDraftAttachments(body).then((data:any) => {
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

# **getSaleDrafts**
> Array<DraftResult> getSaleDrafts()

Returns all sale drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSaleDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getSaleDrafts(body).then((data:any) => {
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

# **getSalePayment**
> Payment getSalePayment()

Returns payment with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSalePaymentRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
  // number
  paymentId: 1,
};

apiInstance.getSalePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined
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

# **getSalePayments**
> Array<Payment> getSalePayments()

Returns all payments for given sale

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSalePaymentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
};

apiInstance.getSalePayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined


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

# **getSales**
> Array<SaleResult> getSales()

Returns all sales for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiGetSalesRequest = {
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
  // string | Find all results with the sale number equal to the specified parameter. (optional)
  saleNumber: "saleNumber_example",
  // boolean | When set to true, returns only sales that have been settled. Otherwise false returns all sales that have not been fully settled.  (optional)
  settled: true,
};

apiInstance.getSales(body).then((data:any) => {
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
 **saleNumber** | [**string**] | Find all results with the sale number equal to the specified parameter. | (optional) defaults to undefined
 **settled** | [**boolean**] | When set to true, returns only sales that have been settled. Otherwise false returns all sales that have not been fully settled.  | (optional) defaults to undefined


### Return type

**Array<SaleResult>**

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

# **settledSale**
> SaleResult settledSale()

Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiSettledSaleRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  saleId: 1,
  // string | Date that the sale is settled
  settledDate: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.settledSale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **saleId** | [**number**] |  | defaults to undefined
 **settledDate** | [**string**] | Date that the sale is settled | defaults to undefined


### Return type

**SaleResult**

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

# **updateSaleDraft**
> void updateSaleDraft(draftRequest)

Updates draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesApi(configuration);

let body:.SalesApiUpdateSaleDraftRequest = {
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

apiInstance.updateSaleDraft(body).then((data:any) => {
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



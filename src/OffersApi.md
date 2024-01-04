# .OffersApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToOfferDraft**](OffersApi.md#addAttachmentToOfferDraft) | **POST** /companies/{companySlug}/offers/drafts/{draftId}/attachments | 
[**createOfferCounter**](OffersApi.md#createOfferCounter) | **POST** /companies/{companySlug}/offers/counter | 
[**createOfferDraft**](OffersApi.md#createOfferDraft) | **POST** /companies/{companySlug}/offers/drafts | 
[**createOfferFromDraft**](OffersApi.md#createOfferFromDraft) | **POST** /companies/{companySlug}/offers/drafts/{draftId}/createOffer | 
[**deleteOfferDraft**](OffersApi.md#deleteOfferDraft) | **DELETE** /companies/{companySlug}/offers/drafts/{draftId} | 
[**getOffer**](OffersApi.md#getOffer) | **GET** /companies/{companySlug}/offers/{offerId} | 
[**getOfferCounter**](OffersApi.md#getOfferCounter) | **GET** /companies/{companySlug}/offers/counter | 
[**getOfferDraft**](OffersApi.md#getOfferDraft) | **GET** /companies/{companySlug}/offers/drafts/{draftId} | 
[**getOfferDraftAttachments**](OffersApi.md#getOfferDraftAttachments) | **GET** /companies/{companySlug}/offers/drafts/{draftId}/attachments | 
[**getOfferDrafts**](OffersApi.md#getOfferDrafts) | **GET** /companies/{companySlug}/offers/drafts | 
[**getOffers**](OffersApi.md#getOffers) | **GET** /companies/{companySlug}/offers | 
[**updateOfferDraft**](OffersApi.md#updateOfferDraft) | **PUT** /companies/{companySlug}/offers/drafts/{draftId} | 


# **addAttachmentToOfferDraft**
> void addAttachmentToOfferDraft()

Creates and adds a new attachment to an offer draft

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiAddAttachmentToOfferDraftRequest = {
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

apiInstance.addAttachmentToOfferDraft(body).then((data:any) => {
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

# **createOfferCounter**
> void createOfferCounter()

Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiCreateOfferCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Counter (optional)
  counter: {
    value: 10000,
  },
};

apiInstance.createOfferCounter(body).then((data:any) => {
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

# **createOfferDraft**
> void createOfferDraft(invoiceishDraftRequest)

Creates an offer draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiCreateOfferDraftRequest = {
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

apiInstance.createOfferDraft(body).then((data:any) => {
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

# **createOfferFromDraft**
> void createOfferFromDraft()

Creates an offer from an already created draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiCreateOfferFromDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.createOfferFromDraft(body).then((data:any) => {
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

# **deleteOfferDraft**
> void deleteOfferDraft()

Delete offer draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiDeleteOfferDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.deleteOfferDraft(body).then((data:any) => {
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

# **getOffer**
> Offer getOffer()

Returns offer with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // string | The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
  offerId: "offerId_example",
};

apiInstance.getOffer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **offerId** | [**string**] | The offerId (primary key of the returned object) is returned as the first field in the GET all offers call  | defaults to undefined


### Return type

**Offer**

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

# **getOfferCounter**
> Counter getOfferCounter()

Retrieves the counter for offers if it has been created 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferCounterRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
};

apiInstance.getOfferCounter(body).then((data:any) => {
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

# **getOfferDraft**
> InvoiceishDraftResult getOfferDraft()

Returns offer draft with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferDraftRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getOfferDraft(body).then((data:any) => {
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

# **getOfferDraftAttachments**
> Array<Attachment> getOfferDraftAttachments()

Returns all attachments for specified draft.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferDraftAttachmentsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The draftId (primary key of the returned object) is returned in the GET all drafts call. 
  draftId: 1,
};

apiInstance.getOfferDraftAttachments(body).then((data:any) => {
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

# **getOfferDrafts**
> Array<InvoiceishDraftResult> getOfferDrafts()

Returns all offer drafts for given company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOfferDraftsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getOfferDrafts(body).then((data:any) => {
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

# **getOffers**
> Array<Offer> getOffers()

Returns all offers for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiGetOffersRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
};

apiInstance.getOffers(body).then((data:any) => {
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

**Array<Offer>**

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

# **updateOfferDraft**
> void updateOfferDraft(invoiceishDraftRequest)

Updates offer draft with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OffersApi(configuration);

let body:.OffersApiUpdateOfferDraftRequest = {
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

apiInstance.updateOfferDraft(body).then((data:any) => {
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



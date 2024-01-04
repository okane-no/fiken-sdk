# .ContactsApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAttachmentToContact**](ContactsApi.md#addAttachmentToContact) | **POST** /companies/{companySlug}/contacts/{contactId}/attachments | 
[**addContactPersonToContact**](ContactsApi.md#addContactPersonToContact) | **POST** /companies/{companySlug}/contacts/{contactId}/contactPerson | 
[**createContact**](ContactsApi.md#createContact) | **POST** /companies/{companySlug}/contacts | 
[**deleteContactContactPerson**](ContactsApi.md#deleteContactContactPerson) | **DELETE** /companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId} | 
[**getContact**](ContactsApi.md#getContact) | **GET** /companies/{companySlug}/contacts/{contactId} | 
[**getContactContactPerson**](ContactsApi.md#getContactContactPerson) | **GET** /companies/{companySlug}/contacts/{contactId}/contactPerson | 
[**getContactPerson**](ContactsApi.md#getContactPerson) | **GET** /companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId} | 
[**getContacts**](ContactsApi.md#getContacts) | **GET** /companies/{companySlug}/contacts | 
[**updateContact**](ContactsApi.md#updateContact) | **PUT** /companies/{companySlug}/contacts/{contactId} | 
[**updateContactContactPerson**](ContactsApi.md#updateContactContactPerson) | **PUT** /companies/{companySlug}/contacts/{contactId}/contactPerson/{contactPersonId} | 


# **addAttachmentToContact**
> void addAttachmentToContact()

Creates and adds a new attachment/document to a contact

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiAddAttachmentToContactRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // string | Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf (optional)
  filename: "invoice_24760.pdf",
  // string | Not required. (optional)
  comment: "comment_example",
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('[B@59b3f754', 'utf-8')), name: '[B@59b3f754' },
};

apiInstance.addAttachmentToContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined
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

# **addContactPersonToContact**
> void addContactPersonToContact(contactPerson)

Adds a new contact person to a contact

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiAddContactPersonToContactRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // ContactPerson
  contactPerson: {
    name: "Betty Boop",
    email: "bb@gmail.com",
    phoneNumber: "98573564",
    address: {
      streetAddress: "Karl Johan 34",
      streetAddressLine2: "H0405",
      city: "Oslo",
      postCode: "0550",
      country: "Norway",
    },
  },
};

apiInstance.addContactPersonToContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactPerson** | **ContactPerson**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined


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
**200** | Created |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createContact**
> void createContact(contact)

Creates a new contact. The Location response header returns the URL of the newly created contact.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiCreateContactRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Contact
  contact: {
    name: "Fiken AS",
    email: "kontakt@fiken.gmail",
    organizationNumber: "913312465",
    phoneNumber: "62158537",
    memberNumber: 5464,
    customer: false,
    supplier: false,
    bankAccountNumber: "11112233334",
    contactPerson: [
      {
        name: "Betty Boop",
        email: "bb@gmail.com",
        phoneNumber: "98573564",
        address: {
          streetAddress: "Karl Johan 34",
          streetAddressLine2: "H0405",
          city: "Oslo",
          postCode: "0550",
          country: "Norway",
        },
      },
    ],
    currency: "NOK",
    language: "Norwegian",
    inactive: true,
    daysUntilInvoicingDueDate: 15,
    address: {
      streetAddress: "Karl Johan 34",
      streetAddressLine2: "H0405",
      city: "Oslo",
      postCode: "0550",
      country: "Norway",
    },
    groups: [
      "groups_example",
    ],
  },
};

apiInstance.createContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | **Contact**|  |
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

# **deleteContactContactPerson**
> void deleteContactContactPerson()

Delete a contact\'s contact person.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiDeleteContactContactPersonRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // number
  contactPersonId: 1,
};

apiInstance.deleteContactContactPerson(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined
 **contactPersonId** | [**number**] |  | defaults to undefined


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

# **getContact**
> Contact getContact()

Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiGetContactRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
};

apiInstance.getContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined


### Return type

**Contact**

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

# **getContactContactPerson**
> Array<ContactPerson> getContactContactPerson()

Retrieves contact person(s) for a specified contact. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiGetContactContactPersonRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
};

apiInstance.getContactContactPerson(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined


### Return type

**Array<ContactPerson>**

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

# **getContactPerson**
> ContactPerson getContactPerson()

Retrieves specified contact person 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiGetContactPersonRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // number
  contactPersonId: 1,
};

apiInstance.getContactPerson(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined
 **contactPersonId** | [**number**] |  | defaults to undefined


### Return type

**ContactPerson**

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

# **getContacts**
> Array<Contact> getContacts()

Retrieves all contacts for the specified company.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiGetContactsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
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
  // number | Find all results with the supplier number equal to the specified parameter. (optional)
  supplierNumber: 1,
  // number | Find all results with the customer number equal to the specified parameter. (optional)
  customerNumber: 1,
  // number | Find all results with the member number equal to the specified parameter. (optional)
  memberNumber: 1,
  // string | Find all results with the name equal to the specified parameter. (optional)
  name: "name_example",
  // string | Find all results with the organization number equal to the specified parameter. (optional)
  organizationNumber: "organizationNumber_example",
  // string | Find all results with the email equal to the specified parameter. (optional)
  email: "email_example",
  // boolean | Returns all contacts that are customers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned. (optional)
  customer: true,
  // boolean | Returns all contacts that are suppliers. If filter is set for both supplier and customer = true, only contacts that are both supplier and customer will be returned. (optional)
  supplier: true,
  // boolean | Return all active contacts (false) or all inactive contacts (true). (optional)
  inactive: true,
  // string | Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers. (optional)
  group: "group_example",
  // 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc' (optional)
  sortBy: "createdDate asc",
  // string | Find all results with the phone number equal to the specified parameter. (optional)
  phoneNumber: "phoneNumber_example",
};

apiInstance.getContacts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
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
 **supplierNumber** | [**number**] | Find all results with the supplier number equal to the specified parameter. | (optional) defaults to undefined
 **customerNumber** | [**number**] | Find all results with the customer number equal to the specified parameter. | (optional) defaults to undefined
 **memberNumber** | [**number**] | Find all results with the member number equal to the specified parameter. | (optional) defaults to undefined
 **name** | [**string**] | Find all results with the name equal to the specified parameter. | (optional) defaults to undefined
 **organizationNumber** | [**string**] | Find all results with the organization number equal to the specified parameter. | (optional) defaults to undefined
 **email** | [**string**] | Find all results with the email equal to the specified parameter. | (optional) defaults to undefined
 **customer** | [**boolean**] | Returns all contacts that are customers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned. | (optional) defaults to undefined
 **supplier** | [**boolean**] | Returns all contacts that are suppliers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned. | (optional) defaults to undefined
 **inactive** | [**boolean**] | Return all active contacts (false) or all inactive contacts (true). | (optional) defaults to undefined
 **group** | [**string**] | Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers. | (optional) defaults to undefined
 **sortBy** | [**&#39;lastModified asc&#39; | &#39;lastModified desc&#39; | &#39;createdDate asc&#39; | &#39;createdDate desc&#39;**]**Array<&#39;lastModified asc&#39; &#124; &#39;lastModified desc&#39; &#124; &#39;createdDate asc&#39; &#124; &#39;createdDate desc&#39;>** |  | (optional) defaults to 'createdDate asc'
 **phoneNumber** | [**string**] | Find all results with the phone number equal to the specified parameter. | (optional) defaults to undefined


### Return type

**Array<Contact>**

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

# **updateContact**
> void updateContact(contact)

Updates an existing contact.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiUpdateContactRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // Contact
  contact: {
    name: "Fiken AS",
    email: "kontakt@fiken.gmail",
    organizationNumber: "913312465",
    phoneNumber: "62158537",
    memberNumber: 5464,
    customer: false,
    supplier: false,
    bankAccountNumber: "11112233334",
    contactPerson: [
      {
        name: "Betty Boop",
        email: "bb@gmail.com",
        phoneNumber: "98573564",
        address: {
          streetAddress: "Karl Johan 34",
          streetAddressLine2: "H0405",
          city: "Oslo",
          postCode: "0550",
          country: "Norway",
        },
      },
    ],
    currency: "NOK",
    language: "Norwegian",
    inactive: true,
    daysUntilInvoicingDueDate: 15,
    address: {
      streetAddress: "Karl Johan 34",
      streetAddressLine2: "H0405",
      city: "Oslo",
      postCode: "0550",
      country: "Norway",
    },
    groups: [
      "groups_example",
    ],
  },
};

apiInstance.updateContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | **Contact**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined


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
**200** | Updated |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateContactContactPerson**
> void updateContactContactPerson(contactPerson)

Updates an existing contact person.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactsApi(configuration);

let body:.ContactsApiUpdateContactContactPersonRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  contactId: 1,
  // number
  contactPersonId: 1,
  // ContactPerson
  contactPerson: {
    name: "Betty Boop",
    email: "bb@gmail.com",
    phoneNumber: "98573564",
    address: {
      streetAddress: "Karl Johan 34",
      streetAddressLine2: "H0405",
      city: "Oslo",
      postCode: "0550",
      country: "Norway",
    },
  },
};

apiInstance.updateContactContactPerson(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactPerson** | **ContactPerson**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **contactId** | [**number**] |  | defaults to undefined
 **contactPersonId** | [**number**] |  | defaults to undefined


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
**200** | Updated |  * Location - Full URL of updated project <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



# .ProductsApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /companies/{companySlug}/products | 
[**createProductSalesReport**](ProductsApi.md#createProductSalesReport) | **POST** /companies/{companySlug}/products/salesReport | 
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /companies/{companySlug}/products/{productId} | 
[**getProduct**](ProductsApi.md#getProduct) | **GET** /companies/{companySlug}/products/{productId} | 
[**getProducts**](ProductsApi.md#getProducts) | **GET** /companies/{companySlug}/products | 
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /companies/{companySlug}/products/{productId} | 


# **createProduct**
> void createProduct(product)

Creates a new product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiCreateProductRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // Product
  product: {
    name: "Spade",
    unitPrice: 300000,
    incomeAccount: "3000",
    vatType: "HIGH",
    active: true,
    productNumber: "125-1",
    stock: 5,
    note: "note_example",
  },
};

apiInstance.createProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **Product**|  |
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

# **createProductSalesReport**
> Array<ProductSalesReportResult> createProductSalesReport(productSalesReportRequest)

Creates a report based on provided specifications.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiCreateProductSalesReportRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // ProductSalesReportRequest
  productSalesReportRequest: {
    _from: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    to: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
  },
};

apiInstance.createProductSalesReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productSalesReportRequest** | **ProductSalesReportRequest**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined


### Return type

**Array<ProductSalesReportResult>**

### Authorization

[fiken_api_oauth](README.md#fiken_api_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProduct**
> void deleteProduct()

Delete product with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiDeleteProductRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
  productId: 1,
};

apiInstance.deleteProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **productId** | [**number**] | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber.  | defaults to undefined


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

# **getProduct**
> Product getProduct()

Returns product with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiGetProductRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
  productId: 1,
};

apiInstance.getProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **productId** | [**number**] | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber.  | defaults to undefined


### Return type

**Product**

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

# **getProducts**
> Array<Product> getProducts()

Returns all products for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiGetProductsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
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
  // string | Find all results with product name equal to the specified parameter. (optional)
  name: "name_example",
  // string | Find all results with product number (varenummer) equal to the specified parameter. (optional)
  productNumber: "productNumber_example",
  // boolean | Returns active (true) or inactive (false) products. (optional)
  active: true,
};

apiInstance.getProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **createdDate** | [**string**] | Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateLe** | [**string**] | Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateLt** | [**string**] | Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateGe** | [**string**] | Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **createdDateGt** | [**string**] | Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModified** | [**string**] | Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLe** | [**string**] | Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedLt** | [**string**] | Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGe** | [**string**] | Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **lastModifiedGt** | [**string**] | Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot;  | (optional) defaults to undefined
 **name** | [**string**] | Find all results with product name equal to the specified parameter. | (optional) defaults to undefined
 **productNumber** | [**string**] | Find all results with product number (varenummer) equal to the specified parameter. | (optional) defaults to undefined
 **active** | [**boolean**] | Returns active (true) or inactive (false) products. | (optional) defaults to undefined


### Return type

**Array<Product>**

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

# **updateProduct**
> void updateProduct(product)

Updates an existing product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductsApi(configuration);

let body:.ProductsApiUpdateProductRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
  productId: 1,
  // Product
  product: {
    name: "Spade",
    unitPrice: 300000,
    incomeAccount: "3000",
    vatType: "HIGH",
    active: true,
    productNumber: "125-1",
    stock: 5,
    note: "note_example",
  },
};

apiInstance.updateProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **Product**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **productId** | [**number**] | The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber.  | defaults to undefined


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



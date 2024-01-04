# .ProjectsApi

All URIs are relative to *https://api.fiken.no/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectsApi.md#createProject) | **POST** /companies/{companySlug}/projects | 
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /companies/{companySlug}/projects/{projectId} | 
[**getProject**](ProjectsApi.md#getProject) | **GET** /companies/{companySlug}/projects/{projectId} | 
[**getProjects**](ProjectsApi.md#getProjects) | **GET** /companies/{companySlug}/projects | 
[**updateProject**](ProjectsApi.md#updateProject) | **PATCH** /companies/{companySlug}/projects/{projectId} | 


# **createProject**
> void createProject(projectRequest)

Creates a new project

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiCreateProjectRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // ProjectRequest
  projectRequest: {
    number: "number_example",
    name: "name_example",
    description: "description_example",
    startDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    endDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    contactId: 73408306,
    completed: true,
  },
};

apiInstance.createProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectRequest** | **ProjectRequest**|  |
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

# **deleteProject**
> void deleteProject()

Delete project with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiDeleteProjectRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  projectId: 1,
};

apiInstance.deleteProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **projectId** | [**number**] |  | defaults to undefined


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

# **getProject**
> ProjectResult getProject()

Returns project with specified id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  projectId: 1,
};

apiInstance.getProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **projectId** | [**number**] |  | defaults to undefined


### Return type

**ProjectResult**

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

# **getProjects**
> Array<ProjectResult> getProjects()

Returns all projects for given company

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiGetProjectsRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  (optional)
  page: 0,
  // number | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  (optional)
  pageSize: 25,
  // boolean | Filter results based on completed / not completed. (optional)
  completed: true,
  // string | Filter results based on name of the project. (optional)
  name: "name_example",
  // string | Filter results based on number of the project. (optional)
  number: "number_example",
};

apiInstance.getProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **page** | [**number**] | Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0.  | (optional) defaults to 0
 **pageSize** | [**number**] | Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25.  | (optional) defaults to 25
 **completed** | [**boolean**] | Filter results based on completed / not completed. | (optional) defaults to undefined
 **name** | [**string**] | Filter results based on name of the project. | (optional) defaults to undefined
 **number** | [**string**] | Filter results based on number of the project. | (optional) defaults to undefined


### Return type

**Array<ProjectResult>**

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

# **updateProject**
> void updateProject(updateProjectRequest)

Updates project with provided id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProjectsApi(configuration);

let body:.ProjectsApiUpdateProjectRequest = {
  // string | Slug of company to retrieve
  companySlug: "companySlug_example",
  // number
  projectId: 1,
  // UpdateProjectRequest
  updateProjectRequest: {
    name: "name_example",
    description: "description_example",
    startDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    endDate: new Date('Tue Apr 03 02:00:00 CEST 2018').toISOString().split('T')[0];,
    contactId: 73408306,
    completed: true,
  },
};

apiInstance.updateProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProjectRequest** | **UpdateProjectRequest**|  |
 **companySlug** | [**string**] | Slug of company to retrieve | defaults to undefined
 **projectId** | [**number**] |  | defaults to undefined


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



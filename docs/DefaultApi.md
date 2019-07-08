# CozeHealthfluxNotesAutocompleteApiExample.DefaultApi

All URIs are relative to *http://localhost:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valueset**](DefaultApi.md#valueset) | **GET** /valueset | Example API returning valueset
[**valueset_0**](DefaultApi.md#valueset_0) | **OPTIONS** /valueset | Example API returning valueset


<a name="valueset"></a>
# **valueset**
> [Object] valueset(valueset, valuesetFragment)

Example API returning valueset

### Example
```javascript
var CozeHealthfluxNotesAutocompleteApiExample = require('coze_healthflux_notes_autocomplete_api_example');

var apiInstance = new CozeHealthfluxNotesAutocompleteApiExample.DefaultApi();

var valueset = "valueset_example"; // String | value set name

var valuesetFragment = "valuesetFragment_example"; // String | fragment of valueset string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.valueset(valueset, valuesetFragment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **valueset** | **String**| value set name | 
 **valuesetFragment** | **String**| fragment of valueset string | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="valueset_0"></a>
# **valueset_0**
> [Object] valueset_0(valueset, valuesetFragment)

Example API returning valueset

### Example
```javascript
var CozeHealthfluxNotesAutocompleteApiExample = require('coze_healthflux_notes_autocomplete_api_example');

var apiInstance = new CozeHealthfluxNotesAutocompleteApiExample.DefaultApi();

var valueset = "valueset_example"; // String | value set name

var valuesetFragment = "valuesetFragment_example"; // String | fragment of valueset string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.valueset_0(valueset, valuesetFragment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **valueset** | **String**| value set name | 
 **valuesetFragment** | **String**| fragment of valueset string | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


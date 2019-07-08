/**
 * Coze Health/Flux Notes Autocomplete API example
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DefaultResponseErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DefaultResponseErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.CozeHealthfluxNotesAutocompleteApiExample) {
      root.CozeHealthfluxNotesAutocompleteApiExample = {};
    }
    root.CozeHealthfluxNotesAutocompleteApiExample.DefaultResponse = factory(root.CozeHealthfluxNotesAutocompleteApiExample.ApiClient, root.CozeHealthfluxNotesAutocompleteApiExample.DefaultResponseErrors);
  }
}(this, function(ApiClient, DefaultResponseErrors) {
  'use strict';




  /**
   * The DefaultResponse model module.
   * @module model/DefaultResponse
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DefaultResponse</code>.
   * @alias module:model/DefaultResponse
   * @class
   * @param errors {Array.<module:model/DefaultResponseErrors>} 
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>DefaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DefaultResponse} obj Optional instance to populate.
   * @return {module:model/DefaultResponse} The populated <code>DefaultResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [DefaultResponseErrors]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DefaultResponseErrors>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));



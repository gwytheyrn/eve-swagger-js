/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.4.1.dev1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeleteCharactersCharacterIdFittingsFittingIdInternalServerError', 'model/DeleteCharactersCharacterIdFittingsFittingIdForbidden', 'model/GetCharactersCharacterIdFittings200Ok', 'model/GetCharactersCharacterIdFittingsForbidden', 'model/GetCharactersCharacterIdFittingsInternalServerError', 'model/PostCharactersCharacterIdFittingsCreated', 'model/PostCharactersCharacterIdFittingsInternalServerError', 'model/PostCharactersCharacterIdFittingsForbidden', 'model/PostCharactersCharacterIdFittingsFitting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteCharactersCharacterIdFittingsFittingIdInternalServerError'), require('../model/DeleteCharactersCharacterIdFittingsFittingIdForbidden'), require('../model/GetCharactersCharacterIdFittings200Ok'), require('../model/GetCharactersCharacterIdFittingsForbidden'), require('../model/GetCharactersCharacterIdFittingsInternalServerError'), require('../model/PostCharactersCharacterIdFittingsCreated'), require('../model/PostCharactersCharacterIdFittingsInternalServerError'), require('../model/PostCharactersCharacterIdFittingsForbidden'), require('../model/PostCharactersCharacterIdFittingsFitting'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.FittingsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.DeleteCharactersCharacterIdFittingsFittingIdInternalServerError, root.EveSwaggerInterface.DeleteCharactersCharacterIdFittingsFittingIdForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdFittings200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdFittingsForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdFittingsInternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsCreated, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsInternalServerError, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsForbidden, root.EveSwaggerInterface.PostCharactersCharacterIdFittingsFitting);
  }
}(this, function(ApiClient, DeleteCharactersCharacterIdFittingsFittingIdInternalServerError, DeleteCharactersCharacterIdFittingsFittingIdForbidden, GetCharactersCharacterIdFittings200Ok, GetCharactersCharacterIdFittingsForbidden, GetCharactersCharacterIdFittingsInternalServerError, PostCharactersCharacterIdFittingsCreated, PostCharactersCharacterIdFittingsInternalServerError, PostCharactersCharacterIdFittingsForbidden, PostCharactersCharacterIdFittingsFitting) {
  'use strict';

  /**
   * Fittings service.
   * @module api/FittingsApi
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new FittingsApi. 
   * @alias module:api/FittingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteCharactersCharacterIdFittingsFittingId operation.
     * @callback module:api/FittingsApi~deleteCharactersCharacterIdFittingsFittingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete fitting
     * Delete a fitting from a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/fittings/{fitting_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/{fitting_id}/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/fittings/{fitting_id}/&#x60; 
     * @param {Integer} characterId ID for a character
     * @param {Integer} fittingId ID for a fitting of this character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/FittingsApi~deleteCharactersCharacterIdFittingsFittingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCharactersCharacterIdFittingsFittingId = function(characterId, fittingId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling deleteCharactersCharacterIdFittingsFittingId";
      }

      // verify the required parameter 'fittingId' is set
      if (fittingId == undefined || fittingId == null) {
        throw "Missing the required parameter 'fittingId' when calling deleteCharactersCharacterIdFittingsFittingId";
      }


      var pathParams = {
        'character_id': characterId,
        'fitting_id': fittingId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/{fitting_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdFittings operation.
     * @callback module:api/FittingsApi~getCharactersCharacterIdFittingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdFittings200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get fittings
     * Return fittings of a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/fittings/&#x60;   ---  This route is cached for up to 300 seconds
     * @param {Integer} characterId ID for a character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/FittingsApi~getCharactersCharacterIdFittingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdFittings200Ok>}
     */
    this.getCharactersCharacterIdFittings = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdFittings";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdFittings200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postCharactersCharacterIdFittings operation.
     * @callback module:api/FittingsApi~postCharactersCharacterIdFittingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostCharactersCharacterIdFittingsCreated} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create fitting
     * Save a new fitting for a character  ---  Alternate route: &#x60;/v1/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/fittings/&#x60; 
     * @param {Integer} characterId ID for a character
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:model/PostCharactersCharacterIdFittingsFitting} opts.fitting Details about the new fitting
     * @param {String} opts.token Access token to use, if preferred over a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/FittingsApi~postCharactersCharacterIdFittingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostCharactersCharacterIdFittingsCreated}
     */
    this.postCharactersCharacterIdFittings = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = opts['fitting'];

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling postCharactersCharacterIdFittings";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent']
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PostCharactersCharacterIdFittingsCreated;

      return this.apiClient.callApi(
        '/characters/{character_id}/fittings/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

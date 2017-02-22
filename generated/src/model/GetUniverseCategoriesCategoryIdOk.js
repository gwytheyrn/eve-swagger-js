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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseCategoriesCategoryIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseCategoriesCategoryIdOk model module.
   * @module model/GetUniverseCategoriesCategoryIdOk
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetUniverseCategoriesCategoryIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseCategoriesCategoryIdOk
   * @class
   * @param categoryId {Integer} category_id integer
   * @param groups {Array.<Integer>} groups array
   * @param name {String} name string
   * @param published {Boolean} published boolean
   */
  var exports = function(categoryId, groups, name, published) {
    var _this = this;

    _this['category_id'] = categoryId;
    _this['groups'] = groups;
    _this['name'] = name;
    _this['published'] = published;
  };

  /**
   * Constructs a <code>GetUniverseCategoriesCategoryIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseCategoriesCategoryIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseCategoriesCategoryIdOk} The populated <code>GetUniverseCategoriesCategoryIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Integer');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['Integer']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * category_id integer
   * @member {Integer} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * groups array
   * @member {Array.<Integer>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * published boolean
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;



  return exports;
}));



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
    root.EveSwaggerInterface.GetCharactersCharacterIdContactsLabels200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdContactsLabels200Ok model module.
   * @module model/GetCharactersCharacterIdContactsLabels200Ok
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdContactsLabels200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdContactsLabels200Ok
   * @class
   * @param labelId {Integer} label_id integer
   * @param labelName {String} label_name string
   */
  var exports = function(labelId, labelName) {
    var _this = this;

    _this['label_id'] = labelId;
    _this['label_name'] = labelName;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdContactsLabels200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdContactsLabels200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdContactsLabels200Ok} The populated <code>GetCharactersCharacterIdContactsLabels200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label_id')) {
        obj['label_id'] = ApiClient.convertToType(data['label_id'], 'Integer');
      }
      if (data.hasOwnProperty('label_name')) {
        obj['label_name'] = ApiClient.convertToType(data['label_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * label_id integer
   * @member {Integer} label_id
   */
  exports.prototype['label_id'] = undefined;
  /**
   * label_name string
   * @member {String} label_name
   */
  exports.prototype['label_name'] = undefined;



  return exports;
}));



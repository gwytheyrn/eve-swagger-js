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
    root.EveSwaggerInterface.SovereigntycampaignsParticipants = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SovereigntycampaignsParticipants model module.
   * @module model/SovereigntycampaignsParticipants
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>SovereigntycampaignsParticipants</code>.
   * participant object
   * @alias module:model/SovereigntycampaignsParticipants
   * @class
   * @param allianceId {Integer} alliance_id integer
   * @param score {Number} score number
   */
  var exports = function(allianceId, score) {
    var _this = this;

    _this['alliance_id'] = allianceId;
    _this['score'] = score;
  };

  /**
   * Constructs a <code>SovereigntycampaignsParticipants</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SovereigntycampaignsParticipants} obj Optional instance to populate.
   * @return {module:model/SovereigntycampaignsParticipants} The populated <code>SovereigntycampaignsParticipants</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Integer');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
    }
    return obj;
  }

  /**
   * alliance_id integer
   * @member {Integer} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * score number
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));



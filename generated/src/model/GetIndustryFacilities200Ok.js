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
    root.EveSwaggerInterface.GetIndustryFacilities200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetIndustryFacilities200Ok model module.
   * @module model/GetIndustryFacilities200Ok
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetIndustryFacilities200Ok</code>.
   * 200 ok object
   * @alias module:model/GetIndustryFacilities200Ok
   * @class
   * @param facilityId {Integer} ID of the facility
   * @param ownerId {Integer} Owner of the facility
   * @param regionId {Integer} Region ID where the facility is
   * @param solarSystemId {Integer} Solar system ID where the facility is
   * @param typeId {Integer} Type ID of the facility
   */
  var exports = function(facilityId, ownerId, regionId, solarSystemId, typeId) {
    var _this = this;

    _this['facility_id'] = facilityId;
    _this['owner_id'] = ownerId;
    _this['region_id'] = regionId;
    _this['solar_system_id'] = solarSystemId;

    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetIndustryFacilities200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetIndustryFacilities200Ok} obj Optional instance to populate.
   * @return {module:model/GetIndustryFacilities200Ok} The populated <code>GetIndustryFacilities200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('facility_id')) {
        obj['facility_id'] = ApiClient.convertToType(data['facility_id'], 'Integer');
      }
      if (data.hasOwnProperty('owner_id')) {
        obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Integer');
      }
      if (data.hasOwnProperty('region_id')) {
        obj['region_id'] = ApiClient.convertToType(data['region_id'], 'Integer');
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Integer');
      }
      if (data.hasOwnProperty('tax')) {
        obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * ID of the facility
   * @member {Integer} facility_id
   */
  exports.prototype['facility_id'] = undefined;
  /**
   * Owner of the facility
   * @member {Integer} owner_id
   */
  exports.prototype['owner_id'] = undefined;
  /**
   * Region ID where the facility is
   * @member {Integer} region_id
   */
  exports.prototype['region_id'] = undefined;
  /**
   * Solar system ID where the facility is
   * @member {Integer} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * Tax imposed by the facility
   * @member {Number} tax
   */
  exports.prototype['tax'] = undefined;
  /**
   * Type ID of the facility
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;



  return exports;
}));



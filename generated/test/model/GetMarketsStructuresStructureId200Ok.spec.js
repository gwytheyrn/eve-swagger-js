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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetMarketsStructuresStructureId200Ok', function() {
    it('should create an instance of GetMarketsStructuresStructureId200Ok', function() {
      // uncomment below and update the code to test GetMarketsStructuresStructureId200Ok
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetMarketsStructuresStructureId200Ok);
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property isBuyOrder (base name: "is_buy_order")', function() {
      // uncomment below and update the code to test the property isBuyOrder
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property issued (base name: "issued")', function() {
      // uncomment below and update the code to test the property issued
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property locationId (base name: "location_id")', function() {
      // uncomment below and update the code to test the property locationId
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property minVolume (base name: "min_volume")', function() {
      // uncomment below and update the code to test the property minVolume
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property range (base name: "range")', function() {
      // uncomment below and update the code to test the property range
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property volumeRemain (base name: "volume_remain")', function() {
      // uncomment below and update the code to test the property volumeRemain
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

    it('should have the property volumeTotal (base name: "volume_total")', function() {
      // uncomment below and update the code to test the property volumeTotal
      //var instane = new EveSwaggerInterface.GetMarketsStructuresStructureId200Ok();
      //expect(instance).to.be();
    });

  });

}));

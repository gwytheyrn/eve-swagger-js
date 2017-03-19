const ExtendableFunction = require('../../internal/ExtendableFunction');

/**
 * An api adapter over the end points handling bloodlines via functions in the
 * [universe](https://esi.tech.ccp.is/latest/#/Universe) ESI endpoints. You
 * should not usually instantiate this directly as its constructor requires an
 * internal api instance.
 *
 * This is a function class so instances of `Bloodlines` are functions and can
 * be invoked directly, besides accessing its members. Its default function
 * action is equivalent to {@link Bloodlines#all all}.
 */
class Bloodlines extends ExtendableFunction {
  /**
   * Create a new Bloodlines function using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    super(() => this.all());
    this._api = api;
  }

  /**
   * @esi_route get_universe_bloodlines
   *
   * @returns {Promise.<Array.<Object>>}
   */
  all() {
    return this._api.universe().newRequest('getUniverseBloodlines', []);
  }
}

module.exports = Bloodlines;

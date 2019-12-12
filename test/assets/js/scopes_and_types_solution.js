/** A Common Toolset
 *
 *  @desc A common toolset for a bunch of DOM manipulation stuff 
 *        and more. 
 *
 * @package Webapplication
 * @module common_tools
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-02
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -


    // - - - - -
    // FUNCTIONS
    // - - - - -
    /**
     * Function to log a variables name, type and value.
     * @param {string} n - name contains the name of an variable
     * @param {*}      v - value of this variable 
     * 
     * @example tools.log('myTestVariable', myTestVariable);
     * 
     *          tools.log.is.name = 'myTestVariable',
     *          tools.log.is.type = ''
     */
    function _log(n, v) {
        let
            name = _getName(n),
            value = _getValue(v),
            type = _getType(value);

        console.log(`${name} {${type}} : ${value}`);
        return true;
    };

    /**
     * get a variables type, differentiates 'array' and 'object'.
     * @param {*} v - value of an variable to get the type of 
     * @returns string|boolean
     */
    function _getType(v) {
        let
            value = v,
            type;

        if (value === undefined || typeof value === 'undefined') type = 'undefined';
        else if (value === null) type = 'object';
        else type = value.constructor.name.toLowerCase();

        return type;
    }

    /**
     * get a variables name, differentiates 'array' and 'object'.
     * @param {*} n - name of an variable to get the type of 
     * @returns string|boolean
     */
    function _getName(n) {
        let name = n || undefined;
        if (name === undefined) return false;
        return name;
    }

    /**
     * get a variables value.
     * @param {*} v - value of an variable to get the type of 
     * @returns string|boolean
     */
    function _getValue(v) {
        let value = v;
        if (value === undefined) return false;

        return value;
    }

    /**
     * publish the module
     */
    function _main() {
        // publish module and a function
        window.tools = {} || window.tools;
        window.tools.log = _log;
        window.tools._getType = _getType;
    }

    // - - - - - - - - - -
    // MODULE CONTROL
    // init the module
    // - - - - - - - - - -
    _main();
}())


window.onload = function () {
    let
        a = 42,
        b = 'text';

    tools.log('a', a);
    tools.log('b', b);
}
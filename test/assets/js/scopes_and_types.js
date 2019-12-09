/**
 * Aufgabe 1 
 *
 * @package Webapplication
 * @module Transfer (Javascript Grundlagen)
 * @author M. Pippert (smalldevice1)
 * @version v0.8.15
 * @since 2019-12-05
 * @copyright von mir aus kann das kopieren wer will, reich werd ich damit sowieso nicht!
 * @license s.o.
 */
 
!(function () {
    'use strict';
    //---------------------
    // DECLARATION 
    //---------------------
    let varBool, varString, varNum, varArray, varObject, varFunction = function (magic) {
        return magic;
    };

    //---------------------
    // FUNCTIONS 
    //---------------------
    function _result(varname, variable) {
        try 
        { 
            if (typeof (variable) === 'object') {
                // works also for arrays ;)
                console.log(varname + ' {' + typeof (variable) + '}'); 
                for (let key in variable) {
                    console.log('Key: ' + key, ' Type: ' + typeof(variable[key]) + ' Value:' + variable[key]);
                }
            } 
            else console.log(varname + ' {' + typeof (variable) + '}: ' + variable);
            console.log("-----------------------------------------------------------------------------"); 
        } 
        catch (error) { console.log(error); }
    }

    function _main() {
        // publish
        window.global = {} || window.global;
        window.global.log = _result;

        // Init
        varBool = false;
        varString = 'Text';
        varNum = 815;
        varArray = [
            [1, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 1, 1, 1]
        ];
        varObject = {
            objectKey1: varBool,
            objectKey2: varString,
            objectKey3: varNum,
            objectKey4: varArray,
            objectKey5: varFunction("in object --> really amazing"),
        };

        // show
        _result("varBool", varBool);
        _result("varString", varString);
        _result("varNum", varNum);
        _result("varArray", varArray);
        _result("varObject", varObject);
        _result("varFunction", varFunction('A kind of magic'));
    }

    //---------------------
    // CONTROL 
    //---------------------
    window.onload = function () {
        _main();
    };

    //------------------------------------------
})()
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
    function _log(varname, variable) {
        try 
        { 
            let varType = _getType(variable);
            if (typeof (variable) === 'object') {
                // works also for arrays ;)
                console.log(varname + varType); 
                for (let key in variable) {
                    console.log(' Key: ' + key + 
                                ' Type:' + _getType((variable[key])) + 
                                ' Value:' + variable[key]);
                }
            } 
            else console.log(varname + 
                            ' Type:' + _getType(variable) + 
                            ' Value:' + variable);
            console.log("-----------------------------------------------------------------------------"); 
        } 
        catch (error) { console.log(error); }
    }

    function _showVarInfo(variable){
        _log(_getVarName({variable}),variable);
    }

    function _getType(variable){
        let varType ='';
        if(Array.isArray(variable)) return ' {Array} ';
        return ' {' + typeof (variable) + '}' ; 
    }

    function _getVarName(variable)
    {
        return Object.keys(variable)[0];
    }

    function _main() {
        // publish
        window.global = {} || window.global;
        window.global.log = _log;

        window.tools = {} || window.tools;
        window.tools.getType = _getType;
        window.tools.showVarInfo = _showVarInfo;
        window.tools.getVarName = _getVarName;

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
        _log("varBool", varBool);
        _log("varString", varString);
        _log("varNum", varNum);
        _log("varArray", varArray);
        _log("varObject", varObject);
        _log("varFunction", varFunction('A kind of magic'));
    }

    //---------------------
    // CONTROL 
    //---------------------
    window.onload = function () {
        _main();
        
        let numVariable = 1;
        let boolVariable = true;
        let stringVariable = "text";
        let arrayVariable = [0, 8, 15];

        console.log("=============================================================================");
        window.tools.showVarInfo(numVariable);
        window.tools.showVarInfo(boolVariable);
        window.tools.showVarInfo(stringVariable);
        window.tools.showVarInfo(arrayVariable);
        
        console.log(window.tools.getVarName({numVariable}), window.tools.getType(numVariable));
        console.log(window.tools.getVarName({boolVariable}), window.tools.getType(boolVariable));
        console.log(window.tools.getVarName({stringVariable}), window.tools.getType(stringVariable));
        console.log(window.tools.getVarName({arrayVariable}), window.tools.getType(arrayVariable));
    };

    //------------------------------------------
})()
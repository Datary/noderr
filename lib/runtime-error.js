"use strict";
/*******************************************************************************
 * @description
 * Empleado cuando se produce la evaluacion de alguna condicion en el seno de 
 * un proceso (vgr, una serie de operaciones en una llamada async.waterfall) 
 * que indica que el proceso debe ser abortado al no cumplirse algun requisito
 * operativo. 
 *******************************************************************************/
var _                   = require('lodash')
,   uuid                = require('node-uuid')
,   extractMessage      = require("./utils").extractMessage
,   importExtraInfo     = require("./utils").importExtraInfo
;



module.exports = class RuntimeError extends Error {
    constructor(info){
        super(extractMessage(info));
        this.uuid = uuid.v4();
        this.name = "RuntimeError";
        this.importExtraInfo(info);
    }
    
    importExtraInfo(info){
        importExtraInfo.call(this, info);
    }
};
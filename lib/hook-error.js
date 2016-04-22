"use strict";
/*******************************************************************************
 * @description
 * Empleado para errores surgidos especificamente en el seno de un hook de 
 * mongoose
 * 
 ******************************************************************************/
var _                   = require('lodash')
,   uuid                = require('node-uuid')
,   extractMessage      = require("./utils").extractMessage
,   importExtraInfo     = require("./utils").importExtraInfo
;



module.exports = class HookError extends Error {
    constructor(info){
        super(extractMessage(info));
        this.uuid = uuid.v4();
        this.name = "HookError";
        this.importExtraInfo(info);
    }
    
    importExtraInfo(info){
        importExtraInfo.call(this, info);
    }
};
"use strict";
/*******************************************************************************
 * @description
 * Empleado cuando los argumentos con los que es invocada una funcion no 
 * satisfacen la especificacion de la misma (tipo de primitiva, valorables numerus
 * clausus, required...)
 *******************************************************************************/
var _                   = require('lodash')
,   uuid                = require('node-uuid')
,   extractMessage      = require("./utils").extractMessage
,   importExtraInfo     = require("./utils").importExtraInfo
;



module.exports = class SignatureError extends Error {
    constructor(info){
        super(extractMessage(info));
        this.uuid = uuid.v4();
        this.name = "SignatureError";
        this.importExtraInfo(info);
    }
    
    importExtraInfo(info){
        importExtraInfo.call(this, info);
    }
};
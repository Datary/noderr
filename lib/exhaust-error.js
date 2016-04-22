"use strict";
/*******************************************************************************
 * @description
 * 
 ******************************************************************************/
var _                   = require('lodash')
,   uuid                = require('node-uuid')
,   extractMessage      = require("./utils").extractMessage
,   importExtraInfo     = require("./utils").importExtraInfo
;



module.exports = class ExhaustError extends Error {
    constructor(info){
        super(extractMessage(info));
        this.uuid = uuid.v4();
        this.name = "ExhaustError";
        this.importExtraInfo(info);
    }
    
    importExtraInfo(info){
        importExtraInfo.call(this, info);
    }
};
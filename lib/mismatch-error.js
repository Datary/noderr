"use strict";
/*******************************************************************************
 * @description
 * 
 *******************************************************************************/
var _                   = require('lodash')
,   uuid                = require('node-uuid')
,   extractMessage      = require("./utils").extractMessage
,   importExtraInfo     = require("./utils").importExtraInfo
;



module.exports = class MismatchError extends Error {
    constructor(info){
        super(extractMessage(info));
        this.uuid = uuid.v4();
        this.name = "MismatchError";
        this.importExtraInfo(info);
    }
    
    importExtraInfo(info){
        importExtraInfo.call(this, info);
    }
};
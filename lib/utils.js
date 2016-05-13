var _               = require('lodash')
,   handlebars      = require('handlebars')
;



/*******************************************************************************
 * 
 */
exports.extractMessage = function(info){
    if (!info) {
        return "No message passed";
    } else if (_.isString(info)) {
        return info;
    } else if (info && info.message) {
        try {
            return handlebars.compile(info.message)(info);
        } catch (e) {
            return info.message;
        }
    } else {
        return "No valid message defined";
    }
};



/*******************************************************************************
 * @description
 * 
 * @param {Object} info:
 * 
 * @return {True}
 */
exports.importExtraInfo = function(info){
    if (!info || !_.isPlainObject(info)) { return }
    for (var key in info) {
        if (key !== "message") {
            this[key] = info[key];
        }
    }
};
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var handlebars_1 = __importDefault(require("handlebars"));
/**
 * Creates view
 */
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.Config = function (fileSrc, viewBag) {
        var template = fs_1["default"].readFileSync(fileSrc, 'utf8');
        var compiled_view = handlebars_1["default"].compile(template);
        return compiled_view(viewBag);
    };
    ;
    return View;
}());
exports.View = View;

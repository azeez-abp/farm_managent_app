var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function objectReverse(colorObject) {
    var flipForm = {};
    var _loop_1 = function (eachObjKey) {
        var _a;
        var eachFlip = {};
        console.log();
        var objKey = Object.keys(colorObject[eachObjKey]).reverse();
        var objValue = Object.values(colorObject[eachObjKey]);
        // const keys = [2, 3];
        // const values = ["d", "sasd"];
        eachFlip = objKey.reduce(function (acc, curr, index) {
            acc[curr] = objValue[index];
            return acc;
        }, {});
        console.log(eachFlip, objKey, objValue);
        flipForm = __assign(__assign({}, flipForm), (_a = {}, _a[eachObjKey] = __assign({}, eachFlip), _a));
    };
    for (var eachObjKey in colorObject) {
        _loop_1(eachObjKey);
    }
    return flipForm;
}
var ce = {
    d: {
        2: "4",
        4: "32ew",
        5: "32321"
    },
    e: {
        4: '444'
    }
};
console.log(objectReverse(ce));

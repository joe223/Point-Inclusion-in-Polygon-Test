(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.PIPtest = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// import { chinaArr, hainanArr, chongmingArr } from "./polygon.js";

var PIPtest = function PIPtest(arr) {
    classCallCheck(this, PIPtest);

    this.arr = arr;
    if (!arr || !arr.length || arr.length < 3) {
        throw new Error("[error] arr's length must large than 3");
    }
    this.test = function (point) {
        var arr = this.arr;
        var result = false;
        var maxLat = arr[0].lat;
        var maxLng = arr[0].lng;
        var minLat = arr[0].lat;
        var minLng = arr[0].lng;
        var len = arr.length;

        this.arr.map(function (item, index) {
            if (item.lat > maxLat) {
                maxLat = item.lat;
            } else if (item.lat < minLat) {
                minLat = item.lat;
            }
            if (item.lng > maxLng) {
                maxLng = item.lng;
            } else if (item.lng < minLng) {
                minLng = item.lng;
            }
        });
        // console.log(maxLat);
        // console.log(maxLng);
        // console.log(minLat);
        // console.log(minLng);
        // console.log("============\n");
        if (point.lat >= minLat && point.lat <= maxLat && point.lng >= minLng && point.lng <= maxLng) {
            for (var next = 0, prev = len - 1; next < len; prev = next++) {
                if (arr[next].lng > point.lng !== arr[prev].lng > point.lng && point.lat < (arr[next].lat - arr[prev].lat) * (point.lng - arr[prev].lng) / (arr[next].lng - arr[prev].lng) + arr[prev].lat) {
                    result = !result;
                }
            }
        }
        return result;
    };
};

return PIPtest;

})));
//# sourceMappingURL=piptest.js.map

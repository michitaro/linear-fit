"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    y = a0 + a1*x approximate samples
    samples : [(x_1, y1), ..., (x_n, y_n)]
 */
function linearFit(samples) {
    var sx0 = 0;
    var sx1 = 0;
    var sx2 = 0;
    var syx0 = 0;
    var syx1 = 0;
    for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
        var _a = samples_1[_i], x = _a[0], y = _a[1];
        sx0 += 1;
        sx1 += x;
        sx2 += x * x;
        syx0 += y;
        syx1 += y * x;
    }
    var D = sx0 * sx2 - sx1 * sx1;
    var a0 = (-sx1 * syx1 + sx2 * syx0) / D;
    var a1 = (sx0 * syx1 - sx1 * syx0) / D;
    return [a0, a1];
}
exports.linearFit = linearFit;

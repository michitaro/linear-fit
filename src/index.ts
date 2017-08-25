/*
    y = a0 + a1*x approximate samples
    samples : [(x_1, y1), ..., (x_n, y_n)]
 */
export function linearFit(samples: [number, number][]) {
    let sx0 = 0
    let sx1 = 0
    let sx2 = 0
    let syx0 = 0
    let syx1 = 0
    for (const [x, y] of samples) {
        sx0 += 1
        sx1 += x
        sx2 += x * x
        syx0 += y
        syx1 += y * x
    }
    const D = sx0 * sx2 - sx1 * sx1
    const a0 = (-sx1 * syx1 + sx2 * syx0) / D
    const a1 = (sx0 * syx1 - sx1 * syx0) / D
    return [a0, a1]
}
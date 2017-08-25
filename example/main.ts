import { linearFit } from "../src"


window.addEventListener('load', e => {
    const canvas = document.querySelector('canvas')!
    const ctx = canvas.getContext('2d')!

    const samples = generateRandomPoints(canvas)
    for (const [x, y] of samples) {
        ctx.fillRect(x, y, 1, 1)
    }

    const [a0, a1] = linearFit(samples)
    ctx.strokeStyle = '#f00'
    ctx.beginPath()
    for (let x = 0; x < canvas.width; ++x) {
        const y = a0 + a1 * x
        ctx.lineTo(x, y)
    }
    ctx.stroke()
})


function generateRandomPoints(size: { width: number, height: number }) {
    const samples: [number, number][] = []
    const a = Math.random() - 0.5
    const c = Math.random() * 0.5
    for (let i = 0; i < 800; ++i) {
        const x = size.width * Math.random()
        const w = 2 * (x / size.width) - 1
        const y = a * size.height * w + size.height * c + 50 * Math.random()
        samples.push([x, y])
    }
    return samples
}
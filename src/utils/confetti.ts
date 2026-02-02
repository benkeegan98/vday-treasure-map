import confetti from 'canvas-confetti'

// Heart shape for confetti
const heart = confetti.shapeFromPath({
  path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
})

export const fireHeartsConfetti = () => {
  const defaults = {
    spread: 360,
    ticks: 150,
    gravity: 0.6,
    decay: 0.91,
    startVelocity: 45,
    shapes: [heart],
    colors: ['#A52A2A', '#D4576B', '#FF6B8A', '#5C4033', '#8B4557'],
    scalar: 1.5,
  }

  // Big center burst
  confetti({
    ...defaults,
    particleCount: 50,
    origin: { x: 0.5, y: 0.5 },
  })

  // Secondary bursts from different positions
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 25,
      startVelocity: 35,
      origin: { x: 0.3, y: 0.6 },
    })
    confetti({
      ...defaults,
      particleCount: 25,
      startVelocity: 35,
      origin: { x: 0.7, y: 0.6 },
    })
  }, 100)

  // Final burst
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 30,
      startVelocity: 50,
      origin: { x: 0.5, y: 0.5 },
    })
  }, 200)
}

// Alternative: burst from specific screen position
export const fireHeartsAtPosition = (x: number, y: number) => {
  const defaults = {
    spread: 360,
    ticks: 80,
    gravity: 0.6,
    decay: 0.94,
    startVelocity: 15,
    shapes: [heart],
    colors: ['#A52A2A', '#D4576B', '#FF6B8A', '#5C4033', '#8B4557'],
    scalar: 1.2,
  }

  confetti({
    ...defaults,
    particleCount: 40,
    origin: { x, y },
  })
}

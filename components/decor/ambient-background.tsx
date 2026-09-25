import type { CSSProperties } from "react"

// Fixed positions keep the decoration sparse and stable across server renders.
const sparkles = [
  [4, 15, 3, 9, -2],
  [15, 36, 2, 12, -8],
  [7, 68, 4, 11, -5],
  [21, 87, 2, 14, -11],
  [37, 7, 2, 13, -4],
  [66, 91, 3, 12, -9],
  [82, 12, 4, 11, -7],
  [94, 29, 2, 14, -3],
  [86, 53, 3, 10, -6],
  [96, 75, 4, 13, -10],
  [77, 79, 2, 15, -12],
  [57, 44, 2, 14, -1],
]

export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-gradient" />
      {sparkles.map(([left, top, size, duration, delay], index) => (
        <span
          key={index}
          className="ambient-sparkle"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            "--sparkle-duration": `${duration}s`,
            "--sparkle-delay": `${delay}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  )
}

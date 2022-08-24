import React from 'react'

// TODO: add direction calc
// 0 - 360 => N, NW, SE...
export default function Wind({ wind }) {
  return (
    <div>Wind: {wind.speed} m/sec</div>
  )
}

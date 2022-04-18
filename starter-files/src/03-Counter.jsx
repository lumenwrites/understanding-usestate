import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  function updateCounter() {
    // Incorrect:
    setCounter(counter + 1)
  }

  return (
    <div className="content">
      <p className="counter">{counter}</p>
      <button onClick={updateCounter}>
        Increment Counter
      </button>
    </div>
  )
}

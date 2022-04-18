import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function updateCount() {
    // Incorrect:
    // setCount(count + 1)

    // Correct:
    setCount((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div className="content">
      <p>You clicked {count} times</p>
      <button onClick={updateCount}>Click me</button>
    </div>
  )
}

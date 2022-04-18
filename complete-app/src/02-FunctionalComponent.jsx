import { useState } from 'react'

export default function MyComponent() {
  const [name, setName] = useState('Jeff')
  return (
    <div className="content">
      <h1>Functional Component</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName('Bob')
        }}
      >
        Set Name
      </button>
    </div>
  )
}

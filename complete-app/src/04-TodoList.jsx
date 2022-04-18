import { useState } from 'react'

const DEFAULT_TODOS = [
  'Walk the dog',
  'Pick up the milk',
  'Find true love'
]

export default function TodoList() {
  const [todoItems, setTodoItems] = useState(DEFAULT_TODOS)
  const [inputValue, setInputValue] = useState('')

  function addItem() {
    setTodoItems((prev) => [...prev, inputValue])
    setInputValue('')
  }

  function removeItem(idx) {
    setTodoItems((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="todo-list">
      {todoItems.map((item, idx) => (
        <div
          className="item"
          key={idx}
          onClick={() => removeItem(idx)}
        >
          {item}
        </div>
      ))}
      {/* <div className="item">{inputValue}</div> */}
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

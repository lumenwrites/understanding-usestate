import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles.scss'

import ClassComponent from './01-ClassComponent'
import FunctionalComponent from './02-FunctionalComponent'
import TodoList from './03-TodoList'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <div className="app">
      <Nav />
      <Routes>
        <Route index element={<ClassComponent />} />
        <Route
          path="function"
          element={<FunctionalComponent />}
        />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </div>
  </BrowserRouter>
)

function Nav() {
  let { pathname } = useLocation()

  return (
    <nav>
      <Link
        className={pathname === '/' ? 'active' : ''}
        to="/"
      >
        Class
      </Link>
      <Link
        className={pathname === '/function' ? 'active' : ''}
        to="/function"
      >
        Function
      </Link>
      <Link
        className={pathname === '/todo' ? 'active' : ''}
        to="/todo"
      >
        Todo
      </Link>
    </nav>
  )
}

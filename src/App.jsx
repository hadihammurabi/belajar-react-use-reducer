import {
  Outlet,
  RouterProvider,
  Link,
} from '@tanstack/react-router'
import { router } from './router';

function App() {
  return (
    <RouterProvider router={router}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/'} style={{ margin: '10px' }}>Counter</Link>
        <Link to={'/todo'} style={{ margin: '10px' }}>Todo</Link>
      </div>
      <Outlet />
    </RouterProvider>
  )
}

export default App

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
      </div>
      <Outlet />
    </RouterProvider>
  )
}

export default App

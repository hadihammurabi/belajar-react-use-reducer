import {
  Outlet,
  RouterProvider,
  Link,
} from '@tanstack/react-router'
import { router } from './router';
import { useConfig, ACTION as CONFIG_ACTION } from './hooks/useConfig';
import { ConfigProvider } from './components/Config';

function App() {
  return (
    <ConfigProvider>
      <AppConfigured />
    </ConfigProvider>
  )
}

const AppConfigured = () => {
  const [config, dispatch] = useConfig();

  return <div style={{ height: '100vh', background: config.darkMode ? '#444' : '' }}>
    <RouterProvider router={router}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/'} style={{ margin: '10px', color: config.darkMode ? 'white': '' }}>Counter</Link>
        <Link to={'/todo'} style={{ margin: '10px', color: config.darkMode ? 'white': '' }}>Todo</Link>
        <div style={{ margin: '10px', color: config.darkMode ? 'white': '' }}>
          <input
            type="checkbox"
            id="toggle-config-dark"
            checked={config.darkMode}
            onChange={() => dispatch({ type: CONFIG_ACTION.TOGGLE })}
          />
          <label htmlFor="toggle-config-dark"> Dark</label>
        </div>
      </div>

      <Outlet />
    </RouterProvider>
  </div>;

};

export default App

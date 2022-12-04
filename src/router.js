import {
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'
import Counter from './pages/Counter';
import Todo from './pages/Todo';

const rootRoute = createRouteConfig()

const routeConfig = rootRoute.addChildren([
  rootRoute.createRoute({
    path: '/',
    component: Counter,
  }),
  rootRoute.createRoute({
    path: '/todo',
    component: Todo,
  }),
]);

export const router = createReactRouter({ routeConfig });

import {
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'
import Counter from './pages/Counter';

const rootRoute = createRouteConfig()

const routeConfig = rootRoute.addChildren([
  rootRoute.createRoute({
    path: '/',
    component: Counter,
  }),
]);

export const router = createReactRouter({ routeConfig });

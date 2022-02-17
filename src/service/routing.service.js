import { Router } from '@vaadin/router';

const initRouter = () => {
  const routerOutput = document.querySelector('router-outlet');
  const router = new Router(routerOutput);

  router.setRoutes([
    { 
      path: '/',
      component: 'home-page'
    },
    {
      path: '(.*)',
      component: 'page-not-found'
    }
  ])
}

window.addEventListener('load', () => initRouter());
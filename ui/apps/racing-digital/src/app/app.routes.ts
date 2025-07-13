import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@racing-digital/races-ui').then((m) => m.Races),
  },
];

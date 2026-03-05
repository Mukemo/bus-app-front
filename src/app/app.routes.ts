import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bus',
    loadChildren: () => {
      return import('./pages/bus/bus.routes').then((m) => m.routes);
    },
  },
  {
    path: 'hotels',
    loadChildren: () => {
      return import('./pages/hotels/hotels.routes').then((m) => m.routes);
    },
  },
  {
    path: 'taxi',
    loadChildren: () => {
      return import('./pages/taxi/taxi.routes').then((m) => m.routes);
    },
  },
  {
    path: 'settings',
    loadChildren: () => {
      return import('./pages/settings/settings.routes').then((m) => m.routes);
    },
  },
];

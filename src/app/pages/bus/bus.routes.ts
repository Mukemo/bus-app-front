import { Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusCreateComponent } from './bus-create/bus-create.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { RoutesComponent } from './routes/routes.component';

export const routes: Routes = [
  {
    path: 'list',
    component: BusListComponent,
  },
  {
    path: 'create',
    component: BusCreateComponent,
  },
  {
    path: 'detail/:id',
    component: BusDetailsComponent,
  },
  {
    path: 'routes',
    component: RoutesComponent,
  },
];

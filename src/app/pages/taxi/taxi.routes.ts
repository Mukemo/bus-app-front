import { Routes } from '@angular/router';
import { TaxiCreateComponent } from './taxi-create/taxi-create.component';
import { TaxiListComponent } from './taxi-list/taxi-list.component';

export const routes: Routes = [
  {
    path: 'create',
    component: TaxiCreateComponent,
  },
  {
    path: 'list',
    component: TaxiListComponent,
  },
];

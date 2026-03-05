import { Routes } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsCreateComponent } from './hotels-create/hotels-create.component';
export const routes: Routes = [
  {
    path: 'list',
    component: HotelsListComponent,
  },
  {
    path: 'create',
    component: HotelsCreateComponent,
  },
];

import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { Route, ROUTES, Tab } from '../../../infrastructure/types/model';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent {
  selectedTab: string = 'today';
  tabs: Tab[] = [
    {
      id: 'today',
      label: 'Today Routes',
    },
    {
      id: 'scheduled',
      label: 'Scheduled Routes',
    },
    {
      id: 'history',
      label: 'History',
    },
    {
      id: 'draft',
      label: 'Draft',
    },
  ];
  columns = ROUTES;
  data: Route[] = [
    {
      id: 1,
      departureTime: '08:00',
      arrivalTime: '12:00',
      name: 'Route 1',
      stops: ['Stop 1', 'Stop 2'],
      origin: 'City A',
      destination: 'City B',
      routeStatus: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Route 2',
      stops: ['Stop 1', 'Stop 2'],
      departureTime: '09:30',
      arrivalTime: '13:30',
      origin: 'City C',
      destination: 'City D',
      routeStatus: 'IN_SERVICE',
    },
    {
      id: 3,
      departureTime: '11:00',
      arrivalTime: '15:00',
      name: 'Route 3',
      stops: ['Stop 1', 'Stop 2'],
      origin: 'City E',
      destination: 'City F',
      routeStatus: 'ACTIVE',
    },
    {
      id: 4,
      departureTime: '14:00',
      arrivalTime: '18:00',
      name: 'Route ',
      stops: ['Stop 1', 'Stop 2'],
      origin: 'City G',
      destination: 'City H',
      routeStatus: 'IN_SERVICE',
    },
  ];

  selectTab(tabId: string): void {
    this.selectedTab = tabId;
  }

  getActiveTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.id === this.selectedTab);
  }
}

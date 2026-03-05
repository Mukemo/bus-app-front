import { routes } from '../../app.routes';

/*
 * Bus model
 */
export interface Route {
  id: number;
  name: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  stops: string[];
  routeStatus: RouteStatus;
}
export interface Bus {
  id: number;
  matriculation: string;
  capacity: number;
  busStatus: BusStatus;
  seatDto: Seat[];
}
export interface Seat {
  id: number;
  label: string;
  seatType: SeatType;
  floor?: number;
  row: number;
  col: number;
  selected?: boolean;
}

export type BusStatus = 'ACTIVE' | 'IN_SERVICE';
export type SeatType = 'EMPTY' | 'SEAT';
export type TaxiStatus = 'ACTIVE' | 'IN_SERVICE';
export type RouteStatus = 'ACTIVE' | 'IN_SERVICE';
/*
 * Hotel model
 */
export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
}

/*
 * Tabs
 */

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  badge?: number;
}

export interface Taxi {
  id: number;
  licensePlate: string;
  capacity: number;
  model: string;
  taxiStatus: TaxiStatus;
}

/*
 * Table wrapper
 */

export interface Column<T> {
  headerText: string;
  field?: keyof T;
  sortable?: boolean;
  columnType?: string;
  actions?: Action<T>[];
  sortDirection?: 'asc' | 'desc' | '';
}

export interface Action<T> {
  label: string;
  icon: string;
  tooltip?: string;
}

// Export data for tests purposes

// id: number;
//   name: string;
//   departureTime: string;
//   arrivalTime: string;
//   stops: string[];

export const ROUTES: Column<Route>[] = [
  {
    headerText: 'Id',
    field: 'id',
    sortDirection: '',
    sortable: true,
  },
  {
    headerText: 'Name',
    field: 'name',
    sortable: true,
    sortDirection: '',
  },
  {
    headerText: 'Departure Time',
    field: 'departureTime',
    sortDirection: '',
    sortable: true,
  },
  {
    headerText: 'Arrival Time',
    field: 'arrivalTime',
    sortDirection: '',
    sortable: true,
  },
  {
    headerText: 'Stops',
    field: 'stops',
    sortDirection: '',
    sortable: true,
  },
  {
    headerText: 'Action',
    columnType: 'action',
    actions: [
      {
        label: 'Edit',
        icon: 'edit',
        tooltip: 'Edit route',
      },
      {
        label: 'Delete',
        icon: 'delete',
        tooltip: 'Delete route',
      },
    ],
  },
];

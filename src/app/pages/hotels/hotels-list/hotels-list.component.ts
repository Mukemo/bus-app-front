import { Component } from '@angular/core';
import { Column, Hotel, Route } from '../../../infrastructure/types/model';
import { JsonPipe, NgForOf } from '@angular/common';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-hotels-list',
  standalone: true,
  imports: [JsonPipe, NgForOf, TableComponent],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.scss',
})
export class HotelsListComponent {
  hotels: Hotel[] = [
    { id: 1, name: 'Grand Hotel', location: 'New York', rating: 4.5 },
    { id: 2, name: 'Sea View Resort', location: 'California', rating: 4.0 },
    { id: 3, name: 'Mountain Inn', location: 'Colorado', rating: 4.2 },
    { id: 4, name: 'City Center Lodge', location: 'Chicago', rating: 3.8 },
  ];
  hotelTableHeaders: Column<Hotel>[] = [
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
      headerText: 'Localisation',
      field: 'location',
      sortDirection: '',
      sortable: true,
    },
    {
      headerText: 'Rating',
      field: 'rating',
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
}

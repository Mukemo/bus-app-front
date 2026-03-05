import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-taxi-list',
  standalone: true,
  imports: [NgForOf, TableComponent],
  templateUrl: './taxi-list.component.html',
  styleUrl: './taxi-list.component.scss',
})
export class TaxiListComponent {
  taxis: any[] = [
    { id: 1, licensePlate: 'ABC123', capacity: 4, model: 'Toyota Prius', taxiStatus: 'ACTIVE' },
    {
      id: 2,
      licensePlate: 'XYZ789',
      capacity: 6,
      model: 'Honda Odyssey',
      taxiStatus: 'IN_SERVICE',
    },
    { id: 3, licensePlate: 'LMN456', capacity: 4, model: 'Ford Fusion', taxiStatus: 'ACTIVE' },
    {
      id: 4,
      licensePlate: 'DEF321',
      capacity: 5,
      model: 'Chevrolet Malibu',
      taxiStatus: 'IN_SERVICE',
    },
  ];
}

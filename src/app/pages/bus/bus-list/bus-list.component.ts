import { Component, inject, OnInit } from '@angular/core';
import { Bus } from '../../../infrastructure/types/model';
import { BusServiceService } from '../../../services/bus-service.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss',
})
export class BusListComponent {
  busService = inject(BusServiceService);

  buses$: Observable<Bus[]> = this.busService.getBuses();
}

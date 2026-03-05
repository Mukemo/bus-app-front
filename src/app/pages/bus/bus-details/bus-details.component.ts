import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BusServiceService } from '../../../services/bus-service.service';
import { Bus } from '../../../infrastructure/types/model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AsyncPipe, JsonPipe, NgIf, NgForOf } from '@angular/common';
import { SeatComponent } from '../../../shared/components/seat/seat.component';

@Component({
  selector: 'app-bus-details',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgForOf, SeatComponent],
  templateUrl: './bus-details.component.html',
  styleUrl: './bus-details.component.scss',
})
export class BusDetailsComponent {
  activatedRoute = inject(ActivatedRoute);

  busService = inject(BusServiceService);

  bus$: Observable<Bus> = this.activatedRoute.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.busService.getBusById(Number(id)))
  );

  arrangeBusRowsAndColumns() {}
}

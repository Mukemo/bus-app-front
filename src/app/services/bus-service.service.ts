import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { Bus } from '../infrastructure/types/model';
const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class BusServiceService {
  constructor(private http: HttpClient) {}

  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${BASE_URL}/api/bus`);
  }

  getBusById(id: number): Observable<Bus> {
    return this.http.get<Bus>(`${BASE_URL}/api/bus/${id}`);
  }
}

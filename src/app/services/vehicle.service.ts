import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Driver } from '../model/driver';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  basePath: string = "http://localhost:8099/App/Vehicle/";

  constructor(private http: HttpClient) { }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.basePath+`view/${id}`)
      .pipe
      (
        catchError(this.errorHandler)
      );
  }


  addVehicle(vh: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.basePath+"add", vh)
      .pipe
      (
        catchError(this.errorHandler)
      );
  }


  getVehicle(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.basePath+"viewAllVehicles")
      .pipe
      (
        catchError(this.errorHandler)
      );
  }

  getVehicleByDriverId(id: number): Observable<Vehicle[]> {
    alert("add");
    return this.http.get<Vehicle[]>(this.basePath+`view/driver/${id}`);
  }


  errorHandler(err: HttpErrorResponse) {
    return throwError(err.message || 'Server Error');
  }


}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Driver } from '../model/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  basePath: string = "http://localhost:8099/App/Driver/";

  constructor(private http: HttpClient) { }


  getDriver(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.basePath+"viewAllDriver")
      .pipe
      (
        catchError(this.errorHandler)
      );
  }

  addDriver(dr: Driver): Observable<Driver> {
    alert(JSON.stringify(dr));
    return this.http.post<Driver>(this.basePath+"add", dr)
      .pipe
      (
        catchError(this.errorHandler)
      );
  }


  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(this.basePath+`view/${id}`)
      .pipe
      (
        catchError(this.errorHandler)
      );
  }


 
  updateDriver(dr: Driver): Observable<Driver> {
    alert(JSON.stringify(dr));
    return this.http.put<Driver>(this.basePath+"update", dr)
      .pipe
      (
        catchError(this.errorHandler)
      );
  }

 

  errorHandler(err: HttpErrorResponse) {
    return throwError(err.message || 'Server Error');
  }

}

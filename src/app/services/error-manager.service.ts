import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService {

  constructor() { }




errorHandler(err:HttpErrorResponse){
    return throwError(()=>(`${err.status} - ${err.message}`));
}
}

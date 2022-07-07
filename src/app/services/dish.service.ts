import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DishesDB } from '../DB/dishes';
import { Dish } from '../Types/Dish';
import { Utils } from '../inmutables/const';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ErrorManagerService } from './error-manager.service';
const { url, endpoints, querys,header } = Utils.http;

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(
    private net: HttpClient,
    private cb_errorH: ErrorManagerService
  ) {}

  ['get*'](): Observable<Dish[]> {
    return this.net
      .get<Dish[]>(url(endpoints.dishes))
      .pipe(catchError(this.cb_errorH.errorHandler));
  }

  getFeatured(): Observable<Dish[]> {
    return this.net
      .get<Dish[]>(url(endpoints.dishes, [querys.featured(true)]))
      .pipe(catchError(this.cb_errorH.errorHandler));
  }

  getById(id: string): Observable<Dish> {
    return this.net.get<Dish[]>(url(endpoints.dishes, [querys.id(id)])).pipe(
      map((data) => data[0]),
      catchError(this.cb_errorH.errorHandler)
    );
  }

  getIdList(): Observable<string[]> {
    return this['get*']().pipe(map((data) => data.map((dish) => dish.id))); //Extencion del observable
  }


   putDish(body:Dish){
    alert(url(endpoints.dishesPar([body.id])))
       return this.net.put(url(endpoints.dishesPar([body.id])),body,header)
       .pipe(catchError(this.cb_errorH.errorHandler))
   }
}

import { Injectable } from '@angular/core';
import { Promotion } from '../Types/promotion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utils } from '../inmutables/const';
import { map, catchError } from 'rxjs/operators';
import { ErrorManagerService } from './error-manager.service';
const { url, endpoints, querys } = Utils.http;

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  constructor(
    private net: HttpClient,
    private cb_errorH: ErrorManagerService
  ) {}

  ['get*'](): Observable<Promotion[]> {
    return this.net
      .get<Promotion[]>(url(endpoints.promotions))
      .pipe(catchError(this.cb_errorH.errorHandler));
  }

  getFeatured(): Observable<Promotion[]> {
    return this.net
      .get<Promotion[]>(url(endpoints.promotions, [querys.featured(true)]))
      .pipe(catchError(this.cb_errorH.errorHandler));
  }

  getById(id: string): Observable<Promotion> {
    return this.net
      .get<Promotion[]>(url(endpoints.promotions, [querys.id(id)]))
      .pipe(
        map((data) => data[0]),
        catchError(this.cb_errorH.errorHandler)
      );
  }
}

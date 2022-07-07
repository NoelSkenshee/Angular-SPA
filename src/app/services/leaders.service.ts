import { Injectable } from '@angular/core';
import { LeadersDB } from '../DB/Leaders';
import { Leader } from '../Types/Leader';
import { of, Observable } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../inmutables/const';
import { ErrorManagerService } from './error-manager.service';
const { url, endpoints } = Utils.http;

@Injectable({
  providedIn: 'root',
})
export class LeadersService {
  constructor(
    private net: HttpClient,
    private cb_errorH: ErrorManagerService
  ) {}

  ['get*'](): Observable<Leader[]> {
    return this.net
      .get<Leader[]>(url(endpoints.leadership))
      .pipe(catchError(this.cb_errorH.errorHandler));
  }
}

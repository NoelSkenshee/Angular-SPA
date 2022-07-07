import { Injectable } from '@angular/core';
import { AboutDB } from '../DB/about';
import { About } from '../Types/about';
import { of, Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../inmutables/const';
import { ErrorManagerService } from './error-manager.service';
const { url, endpoints } = Utils.http;

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(
    private net: HttpClient,
    private errorManager: ErrorManagerService
  ) {}

  get(): Observable<About> {
    return this.net
      .get<About>(url(endpoints.about))
      .pipe(map((data) => data))
      .pipe(catchError(this.errorManager.errorHandler));
  }
}

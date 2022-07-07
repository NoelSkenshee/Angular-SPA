import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Utils } from '../inmutables/const';
import { Contact } from '../Types/contact';
import { ErrorManagerService } from './error-manager.service';
const { url, endpoints,header} = Utils.http;

@Injectable({
  providedIn: 'root',
})

export class FeedbackService {
  constructor(
    private net: HttpClient,
    private errorManager: ErrorManagerService
  ) {}

  postFeedB(body: Contact) {
      return this.net
      .post(url(endpoints.feedback), body, header)
      .pipe(catchError(this.errorManager.errorHandler));
  }

}

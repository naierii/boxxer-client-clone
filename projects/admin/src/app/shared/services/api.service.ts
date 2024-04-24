
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import feathers, { Transport } from '@feathersjs/client';
import { environment } from '@env/environment';
import { feathersRx } from '@app/shared/services/feathers-rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private feathers = feathers();

  constructor(
    private http: HttpClient,
  ) {
    const restClient: Transport = feathers.rest(environment.host);

    this.feathers
      .configure(restClient.angularHttpClient(this.http, { HttpHeaders }))
      .configure(feathersRx());
  }

  service(endpoint: string) {
    return this.feathers.service(endpoint);
  }

  find(endpoint: string, query?: any, loader: boolean = true): Observable<any> {
    return this.service(endpoint)
      .watch()
      .find({ query })
      .pipe(
        finalize(() => {
          this.onEnd();
        })
      );
  }

  get(
    endpoint: string,
    id: number | string,
    query?: any,
    loader: boolean = true
  ): Observable<any> {
    return this.service(endpoint)
      .watch()
      .get(id, { query })
      .pipe(
        finalize(() => {
          if (loader) {
            this.onEnd();
          }
        })
      );
  }

  create(
    endpoint: string,
    data: any,
    loader: boolean = true,
    message?: string
  ): Observable<any> {
    return this.service(endpoint)
      .watch()
      .create(data)
      .pipe(
        finalize(() => {
          this.onEnd();
        })
      );
  }

  update(
    endpoint: string,
    id: number | string,
    data: any,
    query?: any,
    loader: boolean = true
  ): Observable<any> {
    return this.service(endpoint)
      .watch()
      .patch(id, data, { query })
      .pipe(
        finalize(() => {
          this.onEnd();
        })
      );
  }

  remove(
    endpoint: string,
    id: number | string,
    loader: boolean = true,
    headers?: any
  ): Observable<any> {
    return this.service(endpoint)
      .watch()
      .remove(id)
      .pipe(
        finalize(() => {
          this.onEnd();
        })
      );
  }

  public onEnd(): void {
    this.hideLoader();
  }


  private hideLoader(): void {

  }
}

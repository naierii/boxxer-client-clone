import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class CountryService {
  private service: any;
  private endpoint: string;
  private host: string = environment.host;
  constructor(private http: HttpClient) {
    this.endpoint = 'country';
  }

  get url() {
    return `${this.host}/${this.endpoint}`;
  }

  getCountries() {
    const query: any = {
      $select: ['name', 'cca2', 'altSpellings'],
      $sort: ['name'],
      $limit: 5000
    };
    return this.http.get<any>(this.url, {
      params: query
    });
  }
}

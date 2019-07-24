import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpMethods } from '../../helpers/http-methods';
import { environment as env } from 'src/environments/environment';
import { CacheService } from '../cache/cache.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpMethods {
  private basePath = `${env.api.protocol}${env.api.domain}${env.api.version}`;

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) {
    super();
  }

  public get<T>(url: string, options?: object): Observable<T> {

    const request = this.http
      .get<T>(`${this.basePath}${url}`, options);

    return request;


  }

  public post<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .post<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public put<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .put<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public patch<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .patch<T>(`${this.basePath}${url}`, body, options);

    return request;

  }

  public delete<T>(url: string, options?: object): Observable<T> {

    const request = this.http
      .delete<T>(`${this.basePath}${url}`, options);

    return request;

  }

  public cacheMe<T>(url: string, data: T): T {
    this.cache.setStorage(url, data);
    return data;
  }

  public getCache(url: string) {
    return this.cache.getStorage(url);
  }
}

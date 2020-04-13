import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {

  contentHeaders = new HttpHeaders({});

  constructor(
    public http: HttpClient
  ) { }

  async post(path, body, params): Promise<any> {
    return (
      this.http.post(`${environment.serverUrl}${path}`, body, {
        headers: this.contentHeaders,
        params
      })
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError)
    )
  }

  public handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}

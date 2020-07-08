import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class TestServiceService {

  constructor(
    private http: HttpClient
  ) { }

  dataUrl = 'assets/db.json';

  getData() {
    return this.http.get(this.dataUrl);
  }
}

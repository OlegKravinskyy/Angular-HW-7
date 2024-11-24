import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Album } from './http-examples/album';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getDataMethod() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getDataMethodRxJs(): Observable<Album[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(
        map((data) => {
          console.log('Data before transformation:', data);
          return data.map((item) => new Album(item.id, item.title));
        })
      );
  }
}

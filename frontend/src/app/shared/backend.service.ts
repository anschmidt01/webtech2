import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buch } from './buch';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllBuecher(): Observable<Buch[]>{
    return this.http
      .get<Buch[]>(this.baseUrl + 'buecher');
  }

  getBuecherById(buecherId: number): Observable<Buch> {
    return this.http
      .get<Buch>(this.baseUrl + 'buecher/' + buecherId);
  }

  deleteOneBuecher(buecherId: number): void {
    this.http.delete<Buch>(this.baseUrl + 'buecher/' + buecherId)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }
  createOneBuecher(buecher: Buch): void {
    this.http.post<Buch>(this.baseUrl + 'buecher', buecher)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      
  }
  getOne(id: string): Observable<Buch>{
    return this.http.get<Buch>(this.baseUrl + '/' + id);
  }

  update(buecherId: number, buch: Buch): void {
    this.http.put<Buch>(this.baseUrl + '/' + buecherId, buch)
      .subscribe(
        response => {
          console.log(response);
          console.log(response.id);
        },
        error => {
          console.log(error);
        }
      );
  }

}
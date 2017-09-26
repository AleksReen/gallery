import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//обсервабле
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {  }

  // строка подключение к серверу с джейсоном
  connectionString = 'assets/images.json';

// Обсервабле Subject
  private response = new Subject();

  //  геттер, возвращающий Observable (в этом примере — Subject).
  get serverResponse(): Subject<any> {
    return this.response;
  }

  // метод, в котором непосредственно отправляется запрос на сервер.
  serverCall(): void {
    this.http.get( this.connectionString ).subscribe(
        (data) => {
            this.response.next(data); // instead response may be other values
        });
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable()

export class BooksService {

  private url = 'http://localhost:44382/api/bookstore';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getBook() {
    console.log(this.url);
    return this.http.get(this.url);
  }
}
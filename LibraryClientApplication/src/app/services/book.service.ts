import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Book } from '../store/models/book.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
    private router: Router) {
    this.initialiseForm();
  }

  formGroup: FormGroup;
  private baseUrl: string = "http://localhost:3000/api/v1/books";

  initialiseForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(-99),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      author: new FormControl(''),
      publisher: new FormControl(''),
      price: new FormControl(''),
      pages: new FormControl(''),
      count: new FormControl(''),
    });
  }

  populateFormdata(data) {
    this.router.navigateByUrl('/edit');
    this.formGroup.setValue(data);
  }

  //api call for backend server
  createBook(model: Book) {
    return this.http.post(this.baseUrl, model);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  getByTitle(title: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/search/${title}`);
  }

  updateBook(model: Book): Observable<Book> {
    return this.http.put<Book>(this.baseUrl, model);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

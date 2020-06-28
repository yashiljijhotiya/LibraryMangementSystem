import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/store/models/book.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state.model';
import { Router } from '@angular/router';
import { LoadItemAction, DeleteItemAction, SearchItemAction } from 'src/app/store/actions/book.action';
import { BookService } from 'src/app/services/book.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Array<Book>>
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>,
    private router: Router,
    private bookService: BookService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.books$ = this.store.select(store => store.book.list);
    this.loading$ = this.store.select(store => store.book.loading);
    this.error$ = this.store.select(store => store.book.error);
    this.store.dispatch(new LoadItemAction());
  }

  add(){
    this.router.navigateByUrl('/add');
  }

  edit(book){
    this.bookService.populateFormdata(book);
  }

  delete(id){
    this.store.dispatch(new DeleteItemAction(id));
    this.notificationService.success("Deleted Successfully!!");
  }

  search(val: HTMLInputElement){
    this.store.dispatch(new SearchItemAction(val.value));
  }

}

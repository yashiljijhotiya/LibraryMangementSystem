import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookService } from 'src/app/services/book.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AddItemAction, UpdateItemAction } from 'src/app/store/actions/book.action';
import { AppState } from 'src/app/store/models/app.state.model';
import { Book } from 'src/app/store/models/book.model';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  book: Book;
  constructor(private fb: FormBuilder,
    public bookService: BookService,
    private store: Store<AppState>,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void { }

  submit() {
    if (this.bookService.formGroup.valid) {
      let formValue = this.bookService.formGroup.value;
      this.book = {
        id: formValue.id,
        title: formValue.title,
        description: formValue.description,
        author: formValue.author,
        publisher: formValue.publisher,
        count: formValue.count,
        pages: formValue.pages,
        price: formValue.price,
      }
      if (formValue.id === -99) {
        this.store.dispatch(new AddItemAction(this.book));
        this.notificationService.success("Added Successfully!!");
      }
      else {
        this.store.dispatch(new UpdateItemAction(this.book));
        this.notificationService.success("Updated Successfully!!");
      }
      this.router.navigateByUrl('');
    }
    else {
      this.notificationService.error("Something Went Wrong!!");
    }
  }
}

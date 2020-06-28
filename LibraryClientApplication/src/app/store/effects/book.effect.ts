import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadItemAction, BookActionTypes, LoadItemSuccesAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction, AddItemFailureAction, AddItemSuccessAction, AddItemAction, LoadItemFailureAction, UpdateItemSuccessAction, UpdateItemFailureAction, UpdateItemAction, SearchItemAction, SearchItemFailureAction, SearchItemSuccesAction } from '../actions/book.action';
import { BookService } from 'src/app/services/book.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions,
    private bookService: BookService) { }

  @Effect() load$ = this.actions$
    .pipe(
      ofType<LoadItemAction>(BookActionTypes.LOAD_BOOK),
      mergeMap(
        () => this.bookService.getBooks()
          .pipe(
            map(data => {
              return new LoadItemSuccesAction(data)
            }),
            catchError(error => of(new LoadItemFailureAction(error)))
          )
      ),
    )

  @Effect() add$ = this.actions$
    .pipe(
      ofType<AddItemAction>(BookActionTypes.ADD_BOOK),
      mergeMap(
        (data) => this.bookService.createBook(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    )

  @Effect() update$ = this.actions$
    .pipe(
      ofType<UpdateItemAction>(BookActionTypes.UPDATE_BOOK),
      mergeMap(
        (data) => this.bookService.updateBook(data.payload)
          .pipe(
            map(() => new UpdateItemSuccessAction(data.payload)),
            catchError(error => of(new UpdateItemFailureAction(error)))
          )
      )
    )

  @Effect() delete$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(BookActionTypes.DELETE_BOOK),
      mergeMap(
        (data) => this.bookService.deleteBook(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    )


  @Effect() search$ = this.actions$
    .pipe(
      ofType<SearchItemAction>(BookActionTypes.SEARCH_BOOK),
      mergeMap(
        (data) => this.bookService.getByTitle(data.payload)
          .pipe(
            map(() => new SearchItemSuccesAction(data.payload)),
            catchError(error => of(new SearchItemFailureAction(error)))
          )
      )
    )

}
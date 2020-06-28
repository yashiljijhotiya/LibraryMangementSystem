import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

//Action enums
export enum BookActionTypes {
    LOAD_BOOK = '[BOOK] Load Book',
    LOAD_BOOK_SUCCESS = '[BOOK] Load Item Success',
    LOAD_BOOK_FAILURE = '[BOOK] Load Item Faliure',
    SEARCH_BOOK = '[BOOK] Search Book',
    SEARCH_BOOK_SUCCESS = '[BOOK] Search Item Success',
    SEARCH_BOOK_FAILURE = '[BOOK] Search Item Faliure',
    ADD_BOOK = '[BOOK] Add Item',
    ADD_BOOK_SUCCESS = '[BOOK] Add Item Success',
    ADD_BOOK_FAILURE = '[BOOK] Add Item Faliure',
    DELETE_BOOK = '[BOOK] Delete Item',
    DELETE_BOOK_SUCCESS = '[BOOK] Delete Item Success',
    DELETE_BOOK_FAILURE = '[BOOK] Delete Item Faliure',
    UPDATE_BOOK = '[BOOK] Update Item',
    UPDATE_BOOK_SUCCESS = '[BOOK] Update Item Success',
    UPDATE_BOOK_FAILURE = '[BOOK] Update Item Faliure',
}

//Add actions
export class AddItemAction implements Action {

    readonly type = BookActionTypes.ADD_BOOK;

    constructor(public payload: Book) { }

}

export class AddItemSuccessAction implements Action {

    readonly type = BookActionTypes.ADD_BOOK_SUCCESS;

    constructor(public payload: Book) { }

}

export class AddItemFailureAction implements Action {

    readonly type = BookActionTypes.ADD_BOOK_FAILURE;

    constructor(public payload: Error) { }

}

//Delete actions
export class DeleteItemAction implements Action {

    readonly type = BookActionTypes.DELETE_BOOK;

    constructor(public payload: string) { }

}

export class DeleteItemSuccessAction implements Action {

    readonly type = BookActionTypes.DELETE_BOOK_SUCCESS;

    constructor(public payload: string) { }

}

export class DeleteItemFailureAction implements Action {

    readonly type = BookActionTypes.DELETE_BOOK_FAILURE;

    constructor(public payload: string) { }

}

//Load actions
export class LoadItemAction implements Action {

    readonly type = BookActionTypes.LOAD_BOOK;

}

export class LoadItemSuccesAction implements Action {

    readonly type = BookActionTypes.LOAD_BOOK_SUCCESS;

    constructor(public payload: Array<Book>) { }

}

export class LoadItemFailureAction implements Action {

    readonly type = BookActionTypes.LOAD_BOOK_FAILURE;

    constructor(public payload: Error) { }

}

//Search action
export class SearchItemAction implements Action {

    readonly type = BookActionTypes.SEARCH_BOOK;
    constructor(public payload: string) { }

}

export class SearchItemSuccesAction implements Action {

    readonly type = BookActionTypes.SEARCH_BOOK_SUCCESS;

    constructor(public payload: string) { }

}

export class SearchItemFailureAction implements Action {

    readonly type = BookActionTypes.SEARCH_BOOK_FAILURE;

    constructor(public payload: Error) { }

}

//Update actions
export class UpdateItemAction implements Action {

    readonly type = BookActionTypes.UPDATE_BOOK;

    constructor(public payload: Book) { }

}

export class UpdateItemSuccessAction implements Action {

    readonly type = BookActionTypes.UPDATE_BOOK_SUCCESS;

    constructor(public payload: Book) { }

}

export class UpdateItemFailureAction implements Action {

    readonly type = BookActionTypes.UPDATE_BOOK_FAILURE;

    constructor(public payload: Error) { }

}

export type BookAction = AddItemAction |
    AddItemSuccessAction |
    AddItemFailureAction |
    DeleteItemAction |
    DeleteItemSuccessAction |
    DeleteItemFailureAction |
    LoadItemAction |
    LoadItemSuccesAction |
    LoadItemFailureAction |
    UpdateItemAction |
    UpdateItemFailureAction |
    UpdateItemSuccessAction |
    SearchItemAction |
    SearchItemSuccesAction |
    SearchItemFailureAction;
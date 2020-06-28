import { Book } from "../models/book.model";
import { BookAction, BookActionTypes } from '../actions/book.action';

export interface BookState {
    list: Book[],
    loading: boolean,
    error: Error;
}

const initialState: BookState = {
    list: [],
    loading: false,
    error: undefined
}

export function bookReducer(state: BookState = initialState, action: BookAction) {
    switch (action.type) {

        case BookActionTypes.LOAD_BOOK:
            return { ...state, loading: true };

        case BookActionTypes.LOAD_BOOK_SUCCESS:
            return { ...state, list: action.payload, loading: false };

        case BookActionTypes.LOAD_BOOK_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case BookActionTypes.SEARCH_BOOK:
            return { ...state, loading: true };

        case BookActionTypes.SEARCH_BOOK_SUCCESS:
            return { ...state, list: state.list.filter(item => item.title === action.payload), loading: false };

        case BookActionTypes.SEARCH_BOOK_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case BookActionTypes.ADD_BOOK:
            return { ...state, loading: true };

        case BookActionTypes.ADD_BOOK_SUCCESS:
            return { ...state, list: [...state.list, action.payload], loading: true };

        case BookActionTypes.ADD_BOOK_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case BookActionTypes.UPDATE_BOOK:
            return { ...state, loading: true };

        case BookActionTypes.UPDATE_BOOK_SUCCESS:
            return { ...state, list: [...state.list, action.payload], loading: true };

        case BookActionTypes.UPDATE_BOOK_FAILURE:
            return { ...state, error: action.payload, loading: false };

        case BookActionTypes.DELETE_BOOK:
            return { ...state, loading: true };

        case BookActionTypes.DELETE_BOOK_SUCCESS:
            return { ...state, list: state.list.filter(item => item.id !== action.payload), loading: false };

        case BookActionTypes.DELETE_BOOK_FAILURE:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/book.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookEffects } from './store/effects/book.effect';
import { EffectsModule } from '@ngrx/effects';
import { NotificationService } from './services/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({book: bookReducer}),
    EffectsModule.forRoot([BookEffects]),
    ToastrModule.forRoot()
  ],
  providers: [BookService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

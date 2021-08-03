import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ModalViewComponent } from './views/modal-view/modal-view.component';
import { NavViewComponent } from './views/nav-view/nav-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksViewComponent,
    ModalViewComponent,
    NavViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

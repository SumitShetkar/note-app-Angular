import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteEditComponent } from './Components/note-edit/note-edit.component';
import { NoteItemsComponent } from './Components/note-items/note-items.component';
import { NotesComponent } from './Components/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteEditComponent,
    NoteItemsComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

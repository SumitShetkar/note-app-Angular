import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  selectednote:string;

  @Input()
  varname:string;

  @Output()
  childEvent = new EventEmitter<any>();

  @Output()
  deleteEvent = new EventEmitter<any>();

  PassValue(){
     let obj = {notename : this.selectednote , varname:this.varname }
     this.childEvent.emit(obj);
     //this.deleteEvent.emit(obj);
  }

  PassValue1(){
    let obj = {notename : this.selectednote , varname:this.varname }
    //this.childEvent.emit(obj);
    this.deleteEvent.emit(obj);
 }
}

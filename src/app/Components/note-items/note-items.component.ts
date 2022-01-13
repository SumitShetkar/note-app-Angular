import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-items',
  templateUrl: './note-items.component.html',
  styleUrls: ['./note-items.component.css']
})
export class NoteItemsComponent implements OnInit {

  note1 : string = `insurance`;
  note2 : string = `shopping`;
  note3 : string = `planting`;
  note4 : string = `grocery`;

  noteitems: string[] = ['insurance', 'shopping', 'planting','grocery'];

  selectednote : string = ``;
  varname : string = ``;
 
  constructor() { }

  ngOnInit(): void {
     
  }

  changevalue(value : string , varvalue : string){
    this.selectednote = value;
    this.varname = varvalue
  }

  loadNewName(notename : string, varname : string){
      // alert(notename+"  "+varname);
      if(varname === 'note1')
      {
          this.note1 = notename
      }
      else if(varname === 'note2')
      {
        this.note2 = notename
      }
      else if(varname === 'note3')
      {
        this.note3 = notename
      }
      else if(varname === 'note4')
      {
        this.note4 = notename
      }
  }

  deleteName(notename : string, varname : string){
    // alert(notename+"  "+varname);
    if(varname === 'note1')
    {
        this.note1 =''
    }
    else if(varname === 'note2')
    {
      this.note2 = ''
    }
    else if(varname === 'note3')
    {
      this.note3 = ''
    }
    else if(varname === 'note4')
    {
      this.note4 = ''
    }
}

}

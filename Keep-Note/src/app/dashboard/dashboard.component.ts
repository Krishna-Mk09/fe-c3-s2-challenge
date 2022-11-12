import { Component, OnInit } from '@angular/core';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  noteList = Notes;
  
  searchText:string="";

  searchNote(){
    if(this.searchText===""){
      this.noteList=Notes;
    }else{
      this.noteList = this.noteList.filter((note)=>
        note.title.startsWith(this.searchText.toLowerCase()));
    }
  }


  constructor() { }
  ngOnInit(): void {
  }

}

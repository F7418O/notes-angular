import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  @Input() note: any

  constructor(private app: AppComponent) {
  }
  ngOnInit(): void {
  }

  handleColor(id: any){
    this.app.handleColor(id)
  }

  handleRemove(id: any){
    this.app.handleRemove(id)
  }

}

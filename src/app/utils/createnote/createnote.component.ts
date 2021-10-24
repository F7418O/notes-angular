import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  constructor(private app: AppComponent) { }
  
  handleNew(){
    this.app.handleNew()
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  handleSearch(e: any){
    this.app.handleSearch(e)
  }

}

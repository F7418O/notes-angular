import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  darkMode: boolean = false

  constructor() { }
  ngOnInit(): void {
  }

  handleMode(){
    this.darkMode = !this.darkMode
    if(document.body.className == '')
      document.body.className = "darkMode"
    else{
      document.body.className = ""
    }
    
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoComponent } from './utils/logo/logo.component';
import { SearchComponent } from './utils/search/search.component';
import { SettingsComponent } from './utils/settings/settings.component';
import { NoteComponent } from './note/note.component';
import { CreatenoteComponent } from './utils/createnote/createnote.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LogoComponent,
    SearchComponent,
    SettingsComponent,
    NoteComponent,
    CreatenoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

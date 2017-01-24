import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DataService } from '../service/data';

@NgModule({
  declarations: [ // used for components, directives and pipes
    AppComponent,
    ChildComponent
  ],
  imports: [ // used for modules
    BrowserModule, // provides services that are essential to launch and run a browser app. (only in root module)
    FormsModule, // used for forms
    HttpModule // used for http calls
  ],
  providers: [ // used for services
    DataService
  ],
  bootstrap: [AppComponent] //  entry component that Angular loads into the DOM during the bootstrap (application launch) process
})
export class AppModule { }

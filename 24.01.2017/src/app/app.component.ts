import { Component } from '@angular/core';
import { DataService } from '../service/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hi all!';
  public name: string = 'Init value';
  public names: string[];

  constructor(private data: DataService) {
    this.names = data.getNames();
  }

  sortAsc() {
    this.names = this.data.sortAsc();
  }

  sortDesc() {
    this.names = this.data.sortDesc();
  }
}

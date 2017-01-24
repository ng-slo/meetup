import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private names: string[] = [
    'Jack',
    'Ana',
    'John',
    'Elenor',
    'Liam',
    'Carl',
    'Sam',
    'Poly'
  ]

  getNames() {
    return this.names;
  }

  sortAsc() {
    this.names.sort();

    return this.names;
  }

  sortDesc() {
    this.names.sort();
    this.names.reverse();

    return this.names;
  }
}

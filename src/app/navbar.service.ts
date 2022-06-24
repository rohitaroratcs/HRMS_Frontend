import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor() {}
  isOpened: boolean = false;

  toggleOpen(): any {
    this.isOpened = !this.isOpened;
  }
}

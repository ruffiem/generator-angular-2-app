import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './app/components/home/home.tpl.html'
})
export class HomeComponent {
  public weStartHere: string;
  constructor() {
    this.weStartHere = 'We Start Here!';
  }
}

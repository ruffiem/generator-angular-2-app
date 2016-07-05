import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../components/index';

@Routes([
  { path: '/', component: HomeComponent }
])
@Component({
  selector: 'app',
  template: '<content></content>',
  directives: [ HomeComponent ]
})
export class KernelComponent { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  list = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'credcoop',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'esctop',
      icon: 'fa-solid fa-house',
    },
  ]
}

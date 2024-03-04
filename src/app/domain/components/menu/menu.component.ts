import { Component, OnInit } from '@angular/core';
import MenuModel from 'src/app/core/models/MenuModel';
import { menu } from 'src/environments/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: Array<MenuModel>;
  constructor() { 
    this.menu = menu;
  }

  ngOnInit(): void {
  }

}

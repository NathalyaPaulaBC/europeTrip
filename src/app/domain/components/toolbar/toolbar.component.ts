import { Component, OnInit } from '@angular/core';
import MenuModel from '../../../core/models/MenuModel';
import * as menu_mock from '../../../../assets/mock/menu-mock.json';

declare var $: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  menu: Array<MenuModel> = new Array();

  constructor() {
  }

  ngOnInit(): void {
    this.InitToolbar();
    this.menuConfig();
  }

  InitToolbar() {
    var m = menu_mock["default"];
    if(m.length > 0){
      m.forEach(el => {
        this.menu.push(new MenuModel(el));
      });
    }
  }

  menuConfig() {
    $("#menu-btn").click(
      function(event){
        event.stopPropagation();
        $("#sidebar").toggleClass("active-nav");
        $(".road-trip-content").toggleClass("active-cont");
      }
    );
  }
}

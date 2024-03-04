import { Component, OnInit } from '@angular/core';
import PostModel from '../../../core/models/PostModel';
import * as mock from '../../../../assets/mock/conteudo-mock.json';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var list = new PostModel(mock["default"][0]);
    console.log("mock list", $(list));
  }

}

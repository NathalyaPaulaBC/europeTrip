import { AfterViewInit, Component, OnInit } from '@angular/core';
import PostModel from 'src/app/core/models/PostModel';
import * as mock from '../../../../assets/mock/conteudo-mock.json';
declare var $: any;

@Component({
  selector: 'app-presentation-cards',
  templateUrl: './presentation-cards.component.html',
  styleUrls: ['./presentation-cards.component.scss']
})
export class PresentationCardsComponent implements OnInit, AfterViewInit {
  conteudo: Array<PostModel> = new Array();

  constructor() {
    this.InitMock();
  }

  ngOnInit(): void {
    this.InitGridder();
  }

  ngAfterViewInit(): void {
    this.InitLinkGridder();
  }

  InitMock(): void {
    var m = mock['default'];
    if (m.length > 0){
      m.forEach(el => {
        this.conteudo.push(new PostModel(el));
      });
      console.log(this.conteudo);
    }
  }

  InitGridder(): void {
    $('.gridder').gridderExpander({
      scroll: true,
      scrollOffset: 30,
      scrollTo: "panel",                  // panel or listitem
      animationSpeed: 400,
      animationEasing: "easeInOutExpo",
      showNav: true,                      // Show Navigation
      nextText: "Next",                   // Next button text
      prevText: "Previous",               // Previous button text
      closeText: "Close",                 // Close button text
      onStart: function(){
          //Gridder Inititialized
      },
      onContent: function(){
          //Gridder Content Loaded
      },
      onClosed: function(){
          //Gridder Closed
      }
    });
  }

  InitLinkGridder(): void {
    this.conteudo.forEach(post => {
      $(`#img-grd-${post.idPostagem}`).attr("data-griddercontent",`#content${post.idPostagem}`);
    })
  }
}

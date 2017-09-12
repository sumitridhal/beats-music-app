import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-genre-card]',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {
  class: string = 'inactive';
  @Input() name: string;
  @Input() image: string;

  constructor() { }

  changeStyle($event) {
    this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
  }

  ngOnInit() {
    // var nativeElement: HTMLElement = this.el.nativeElement,
    //   parentElement: HTMLElement = nativeElement.parentElement;
    // while (nativeElement.firstChild) {
    //   parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    // }
    // parentElement.removeChild(nativeElement);
  }

}

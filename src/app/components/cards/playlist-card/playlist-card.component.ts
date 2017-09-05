import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
  class: string = 'inactive';
  @Input() playlist: any;
  @Input() id: string;

  constructor(private el: ElementRef) { }

  changeStyle($event) {
    this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
  }

//filtrclassical/digster.co.uk
  ngOnInit() {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
  }
}

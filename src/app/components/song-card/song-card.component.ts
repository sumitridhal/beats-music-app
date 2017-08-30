import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  class: string = 'inactive';
  @Input() song: any;
  @Input() name: string;

  constructor(private el: ElementRef) { }

  changeStyle($event) {
    this.class = $event.type == 'mouseover' ? 'active' : 'inactive';
  }


  ngOnInit() {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
  }

}

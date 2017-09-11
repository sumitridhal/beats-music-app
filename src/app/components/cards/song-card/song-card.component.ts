import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  //trans: string = 'animating fade in inactive';
  trans: string = 'inactive';
  dim: string = '';
  @Input() song: any;
  @Input() name: string;

  constructor(private el: ElementRef) { }

  changeStyle($event) {
    this.trans = $event.type == 'mouseover' ? 'visible active' : 'inactive';
    //this.dim = $event.type == 'mouseover' ? 'dimmed' : '';
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  public currentPlaying;
  public currentPostion: string = '0:00'
  public currentDuration: string = '4:30'
  isPlaying: boolean = true;
  progress: number = 40;

  constructor() {
    this.currentPlaying = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Maroon_5_-_Overexposed.png/220px-Maroon_5_-_Overexposed.png',
      title: 'Maps',
      artist: 'Maroon 5'
    }
  }

  ngOnInit() {
  }

}

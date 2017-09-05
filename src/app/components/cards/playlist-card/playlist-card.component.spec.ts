import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCardComponent } from './playlist-card.component';

describe('PlaylistCardComponent', () => {
  let component: PlaylistCardComponent;
  let fixture: ComponentFixture<PlaylistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

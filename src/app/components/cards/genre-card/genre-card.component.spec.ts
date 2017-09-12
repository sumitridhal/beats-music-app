import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCardComponent } from './genre-card.component';

describe('GenreCardComponent', () => {
  let component: GenreCardComponent;
  let fixture: ComponentFixture<GenreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

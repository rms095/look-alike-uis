import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchBarComponent } from './youtube-search-bar.component';

describe('YoutubeSearchBarComponent', () => {
  let component: YoutubeSearchBarComponent;
  let fixture: ComponentFixture<YoutubeSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

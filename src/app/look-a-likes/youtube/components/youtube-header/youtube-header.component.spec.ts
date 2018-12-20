import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeHeaderComponent } from './youtube-header.component';

describe('YoutubeHeaderComponent', () => {
  let component: YoutubeHeaderComponent;
  let fixture: ComponentFixture<YoutubeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

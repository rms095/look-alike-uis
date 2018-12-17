import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriHeaderComponent } from './naukri-header.component';

describe('NaukriHeaderComponent', () => {
  let component: NaukriHeaderComponent;
  let fixture: ComponentFixture<NaukriHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukriHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriBodyComponent } from './naukri-body.component';

describe('NaukriBodyComponent', () => {
  let component: NaukriBodyComponent;
  let fixture: ComponentFixture<NaukriBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukriBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

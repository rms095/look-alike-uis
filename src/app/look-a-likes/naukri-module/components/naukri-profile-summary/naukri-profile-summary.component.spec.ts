import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriProfileSummaryComponent } from './naukri-profile-summary.component';

describe('NaukriProfileSummaryComponent', () => {
  let component: NaukriProfileSummaryComponent;
  let fixture: ComponentFixture<NaukriProfileSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriProfileSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukriProfileSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

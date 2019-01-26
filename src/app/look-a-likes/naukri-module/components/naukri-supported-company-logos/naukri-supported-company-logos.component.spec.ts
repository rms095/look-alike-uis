import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriSupportedCompanyLogosComponent } from './naukri-supported-company-logos.component';

describe('NaukriSupportedCompanyLogosComponent', () => {
  let component: NaukriSupportedCompanyLogosComponent;
  let fixture: ComponentFixture<NaukriSupportedCompanyLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriSupportedCompanyLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukriSupportedCompanyLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

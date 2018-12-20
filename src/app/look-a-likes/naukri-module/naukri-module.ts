import { SliderModule } from 'angular-image-slider';

import { NgModule } from '@angular/core';
import {NaukriHeaderComponent} from './components/naukri-header/naukri-header.component';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NaukriProfileSummaryComponent } from './components/naukri-profile-summary/naukri-profile-summary.component';
import { NaukriBodyComponent } from './components/naukri-body/naukri-body.component';
import { NaukriSupportedCompanyLogosComponent } from './components/naukri-supported-company-logos/naukri-supported-company-logos.component';

@NgModule({
  declarations: [
    NaukriHeaderComponent,
    NaukriProfileSummaryComponent,
    NaukriBodyComponent,
    NaukriSupportedCompanyLogosComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule,
    SliderModule
  ],
  exports: [
    NaukriHeaderComponent,
    NaukriProfileSummaryComponent,
    NaukriBodyComponent,
    NaukriSupportedCompanyLogosComponent
  ],
  providers: []
})
export class NaukriModule { }

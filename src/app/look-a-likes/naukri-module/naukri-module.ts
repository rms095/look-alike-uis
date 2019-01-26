import { SliderModule } from 'angular-image-slider';

import { NgModule } from '@angular/core';
import {NaukriHeaderComponent} from './components/naukri-header/naukri-header.component';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NaukriProfileSummaryComponent } from './components/naukri-profile-summary/naukri-profile-summary.component';
import { NaukriBodyComponent } from './components/naukri-body/naukri-body.component';
import { NaukriSupportedCompanyLogosComponent } from './components/naukri-supported-company-logos/naukri-supported-company-logos.component';
import { NaukriRoutingModule } from './naukari-module.routing';
import { NaukriModuleComponent } from './naukri.component';

@NgModule({
  declarations: [
    NaukriHeaderComponent,
    NaukriProfileSummaryComponent,
    NaukriBodyComponent,
    NaukriSupportedCompanyLogosComponent,
    NaukriModuleComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule,
    SliderModule,
    NaukriRoutingModule
  ],
  exports: [
    NaukriHeaderComponent,
    NaukriProfileSummaryComponent,
    NaukriBodyComponent,
    NaukriSupportedCompanyLogosComponent,
    NaukriModuleComponent
  ],
  providers: []
})
export class NaukriModule { }

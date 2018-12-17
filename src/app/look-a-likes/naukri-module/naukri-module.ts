import { NgModule } from '@angular/core';
import {NaukriHeaderComponent} from './components/naukri-header/naukri-header.component';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    NaukriHeaderComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    NaukriHeaderComponent
  ],
  providers: []
})
export class NaukriModule { }

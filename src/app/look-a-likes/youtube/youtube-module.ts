import { SliderModule } from 'angular-image-slider';

import { NgModule } from '@angular/core';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {YoutubeHeaderComponent} from "./components/youtube-header/youtube-header.component";

@NgModule({
  declarations: [
    YoutubeHeaderComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
  ],
  providers: []
})
export class YoutubeModule { }

import { SliderModule } from 'angular-image-slider';

import { NgModule } from '@angular/core';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {YoutubeHeaderComponent} from './components/youtube-header/youtube-header.component';
import { YoutubeModuleComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-module.routing';

@NgModule({
  declarations: [
    YoutubeHeaderComponent,
    YoutubeModuleComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule,
    YoutubeRoutingModule
  ],
  exports: [
    YoutubeHeaderComponent,
    YoutubeModuleComponent
  ],
  providers: []
})
export class YoutubeModule { }

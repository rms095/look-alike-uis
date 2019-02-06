import { MatVideoModule } from 'mat-video';

import { NgModule } from '@angular/core';
import {AngularMaterialModule} from '../angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {YoutubeHeaderComponent} from './components/youtube-header/youtube-header.component';
import { YoutubeModuleComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-module.routing';
import { YoutubeSearchBarComponent } from './components/youtube-search-bar/youtube-search-bar.component';
import { YoutubeVideoPlayerComponent } from './components/youtube-video-player/youtube-video-player.component';

@NgModule({
  declarations: [
    YoutubeHeaderComponent,
    YoutubeModuleComponent,
    YoutubeSearchBarComponent,
    YoutubeVideoPlayerComponent
  ],
  imports: [
    AngularMaterialModule,
    FlexLayoutModule,
    YoutubeRoutingModule,
    MatVideoModule
  ],
  exports: [
    YoutubeHeaderComponent,
    YoutubeModuleComponent,
    YoutubeSearchBarComponent
  ],
  providers: []
})
export class YoutubeModule { }

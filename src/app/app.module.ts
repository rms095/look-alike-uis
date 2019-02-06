import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './look-a-likes/angular-material-module/angular-material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatBadgeIconDirective} from './look-a-likes/directives/mat-badge-icon.directive';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [
    AppComponent,
    MatBadgeIconDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatVideoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

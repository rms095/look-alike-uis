import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NaukriModule} from "./look-a-likes/naukri-module/naukri-module";
import {AngularMaterialModule} from "./look-a-likes/angular-material-module/angular-material-module";
import {FlexLayoutModule} from '@angular/flex-layout';
import { NaukriProfileSummaryComponent } from './look-a-likes/naukri-module/components/naukri-profile-summary/naukri-profile-summary.component';
import { MatBadgeIconDirective } from './look-a-likes/directives/mat-badge-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    NaukriProfileSummaryComponent,
    MatBadgeIconDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NaukriModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

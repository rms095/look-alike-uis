import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNavList, MatSidenavModule, MatChipsModule,
  MatToolbarModule, MatTooltipModule, MatBadgeModule, MatProgressBarModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule, 
    MatBadgeModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatChipsModule
  ]
})
export class AngularMaterialModule{ }

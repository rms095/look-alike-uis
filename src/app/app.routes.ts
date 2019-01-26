import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'naukri'
  },
  {
    path: 'naukri',
    loadChildren: './look-a-likes/naukri-module/naukri-module#NaukriModule'
  },
  {
    path: 'youtube',
    loadChildren: './look-a-likes/youtube/youtube-module#YoutubeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

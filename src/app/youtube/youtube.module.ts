import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    UserloginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlserviceService } from './glservice.service';
import { YoutubeModule } from './youtube/youtube.module';



@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YoutubeModule
  ],
  providers: [GlserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    
  }
 }

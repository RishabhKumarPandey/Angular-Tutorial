import { Component, HostListener, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Car } from './car';
import { GlserviceService } from './glservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userLoggedIn: boolean = false;
  title = 'Rishabh Kumar';
  btnclick() {
    prompt("Enter the first no.")
  }
  cars:Array<Car> = [
    {name:"bmw", color: "red", speed: 200},
    {name:"audi", color: "blue", speed: 500},
    {name:"tesla", color: "yellow", speed: 300}
  ]
  // cars : Array <string> = ["BMW" ,"Audi", "Lexus", "Tesla"];
  // constructor(){
  //  console.log ("you are in component.tc")
  // }
  // @HostListener('click',['$event'])
  // onhostclick(event:Event){
  //   alert("The host is listening your event")
  // }
}

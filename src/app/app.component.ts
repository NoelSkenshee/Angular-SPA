import { Component } from '@angular/core';
import {faHome,faList,faInfo,faContactCard} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'express-restaurant-service';
  home=faHome;
  menu=faList;
  info=faInfo;
  contact=faContactCard;


}



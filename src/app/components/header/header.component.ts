import { Component, OnInit } from '@angular/core';
import {faHome,faList,faInfo,faContactCard} from "@fortawesome/free-solid-svg-icons"
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  home=faHome;
  menu=faList;
  info=faInfo;
  contact=faContactCard;

  ngOnInit(): void {

  }

  openDialog(){
    this.dialog.open(LoginComponent)
  }

}

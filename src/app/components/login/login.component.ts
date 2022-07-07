import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  constructor() {}

  ngOnInit(): void {}
  login() {}
}

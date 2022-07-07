import { Component, OnInit } from '@angular/core';
import { Leader } from '../../Types/Leader';
import { LeadersService } from '../../services/leaders.service';
import { AboutService } from '../../services/about.service';
import { About } from 'src/app/Types/about';
import { urlBase } from 'src/app/inmutables/const';

@Component({
  selector: 'app-aboute',
  templateUrl: './aboute.component.html',
  styleUrls: ['./aboute.component.css'],
})
export class AbouteComponent implements OnInit {
  leaders!: Leader[];
  about!: About;
  baseurl = urlBase;
  error = '';

  constructor(private Services: LeadersService, private aboutDB: AboutService) {
    this.aboutDB
      .get()
      .toPromise()
      .then((res) => {
        this.about = res;
      })
      .catch((err) => {
        this.error = err();
      });
  }

  ngOnInit(): void {
    this.leaderList();
    this.getAboute();
  }

  leaderList() {
    this.Services['get*']().subscribe(
      (res) => {
        this.leaders = res;
      },
      (err) => (this.error = err)
    );
  }

  getAboute() {}
}

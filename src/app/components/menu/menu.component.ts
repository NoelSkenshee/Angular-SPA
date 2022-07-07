import { Component, OnInit } from '@angular/core';
import { Dish } from '../../Types/Dish';
import { DishService } from '../../services/dish.service';
import { Router } from '@angular/router';
import { urlBase } from '../../inmutables/const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(public db: DishService, private router: Router) {}
  urlbase=urlBase;
  ngOnInit(): void {

     this.db['get*']().subscribe((data)=>{
      this.dishes =data;
     });
  }

  morInfo({ id }: { id: String }) {
    this.router.navigate(['/dishDetail/', id]);
  }
}

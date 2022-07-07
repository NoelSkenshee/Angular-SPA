import { Component, OnInit } from '@angular/core';
import { Dish } from '../../Types/Dish';
import { Promotion } from '../../Types/promotion';
import { DishService } from '../../services/dish.service';
import { PromotionsService } from '../../services/promotions.service';
import { urlBase } from '../../inmutables/const';
import {
  trigger,
  state,
  animate,
  animation,
  style,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
     trigger("lefToRight",[
         state("left",style({
               transform:"translateX(-100%)",
               opacity:1
         })),
         state("toRight",style({
          transform:"translateX(100%)",
          opacity:0.4
         })),
         transition("*=>*",[animate("1s 2s ease-in-out")]),
         transition("void=>*",[animate("1s 2s ease-in-out")])

     ])

  ],
})
export class HomeComponent implements OnInit {
  dishes!: Dish[];
  promotions!: Promotion[];
  dishesFeatured: Dish[]=[] ;
  promotionsFeatured!: Promotion[];
  pageDish: number = 1;
  prevDish = 0;
  pagePromo: number = 1;
  prevPromo = 0;
  urlbase = urlBase;
  dish!: Dish;
  promotion!: Promotion;



  animationStateDish="left"

  constructor(
    private dishData: DishService,
    private promotionData: PromotionsService
  ) {}

  ngOnInit(): void {
    this.listDish()
    this.listFeaturedDish()
    this.listPromotions()
    this.listFeaturedPromotions()


  }

  listDish() {
    this.dishData['get*']().subscribe((res) => {
      this.dishes = res;
      this.dish = this.dishes[0];
    });
  }
  listFeaturedDish() {
    this.dishData.getFeatured().subscribe((res) => {
      this.dishesFeatured = res;
      this.paginationDishes();
      console.log(this.dishesFeatured[this.prevDish],this.dishesFeatured[this.pageDish] );
      setTimeout(() => {
      this.animationStateDish="toRight"
       }, 2000)

    });
  }

  listPromotions() {
    this.promotionData['get*']().subscribe((data) => {
      this.promotions = data;
    });
  }

  listFeaturedPromotions() {
    this.promotionData.getFeatured().subscribe((data) => {
      this.promotionsFeatured = data;
      this.paginationPromotions();
      console.log(this.promotionsFeatured[this.pagePromo],this.promotionsFeatured[this.prevPromo] );

    });
  }

  paginationDishes() {
    if(this.dishesFeatured.length<2)return
    setInterval(() => {
      let page_to_read= (this.dishesFeatured.length - 1)-this.pageDish;
      if (page_to_read==0) {
        this.pageDish = 1;
        this.prevDish=0;
      }
      this.prevDish=this.pageDish;
      this.pageDish += 1;
    }, 10000);
  }

  paginationPromotions() {
    if(this.promotionsFeatured.length<2)return
    alert("H1")
    setInterval(() => {
      let page_to_read = this.promotionsFeatured.length - 1 - this.pagePromo;
      if (page_to_read == 0) {
        this.pagePromo = 0;
        this.prevPromo = 0;
      }
      this.prevPromo = this.pagePromo;
      this.pagePromo += 1;

    }, 1000);
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AbouteComponent } from '../components/aboute/aboute.component';
import { ContactComponent } from '../components/contact/contact.component';
import { MenuComponent } from '../components/menu/menu.component';
import { DishdetailComponent } from '../components/dishdetail/dishdetail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'aboute',
    component: AbouteComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'dishDetail/:id',
    component: DishdetailComponent,
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
];

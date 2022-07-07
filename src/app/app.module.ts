import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle"






import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import "hammerjs";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DishdetailComponent } from './components/dishdetail/dishdetail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllRoutesModule } from './Routes/all-routes.module';
import { HomeComponent } from './components/home/home.component';
import { AbouteComponent } from './components/aboute/aboute.component';
import { ContactComponent } from './components/contact/contact.component';
import { DishService } from './services/dish.service';
import { PromotionsService } from './services/promotions.service';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActiveElDirective } from './directives/active-el.directive';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AbouteComponent,
    ContactComponent,
    DialogFormComponent,
    LoginComponent,
    ActiveElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    AllRoutesModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    HttpClientModule,

  ],
  providers: [DishService,PromotionsService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

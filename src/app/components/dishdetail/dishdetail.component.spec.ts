import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { DishdetailComponent } from './dishdetail.component';
import { ActivatedRoute } from '@angular/router';
import {MatProgressSpinner} from "@angular/material/progress-spinner"


describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([]),ActivatedRoute,MatProgressSpinner],
      declarations: [ DishdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

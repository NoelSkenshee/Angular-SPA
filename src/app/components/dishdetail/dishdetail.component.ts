import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Dish } from '../../Types/Dish';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DishService } from '../../services/dish.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Utils } from '../../inmutables/const';
const detailsErrorInput = Utils.components.details;

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
})
export class DishdetailComponent implements OnInit {
  dish!: Dish;
  //@Output() close:EventEmitter<any>=new EventEmitter();
  @ViewChild('fcomment') formCommentEl: any;

  formComment!: FormGroup;
  idList!: string[];
  prevPage = 0;
  nextPage = 0;
  errors: any = {
    comment: '',
    author: '',
  };
  error = '';
  errorsMessages: any = detailsErrorInput;

  detectChanges(data?: any) {
    if (!data) return;
    for (let field in this.errors) {
      if (!this.errors.hasOwnProperty(field)) return;
      let validate = this.formComment.get(field);
      if (validate && validate.dirty && !validate.valid) {
        for (let error in validate.errors) {
          let messages = this.errorsMessages[field];
          this.errors[field] = messages[error];
        }
      }
    }
  }

  constructor(
    private dishService: DishService,
    private activ_route: ActivatedRoute,
    private location: Location,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.formComment = builder.group({
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      comment: ['', [Validators.required, Validators.minLength(30)]],
      date: [new Date().toUTCString()],
      ratting: [4, [Validators.minLength(1), Validators.minLength(5)]],
    });
    this.formComment.valueChanges.subscribe((data) => this.detectChanges(data));
    this.detectChanges();
  }

  getDishById() {
    this.activ_route.params
      .pipe(
        switchMap((params: Params, _) => this.dishService.getById(params['id']))
      )
      .subscribe((data) => {
        this.dish = data;
      });
  }

  listID() {
    this.dishService.getIdList().subscribe(
      (listId) => {
        this.idList = listId;
      },
      (err) => (this.error = err())
    );
  }

  ngOnInit(): void {
    this.getDishById();
    this.listID();
  }

  closeMorInfo() {
    this.location.back();
  }

  save() {
    this.dish.comments.push(this.formComment.value);
    this.dishService.putDish(this.dish).subscribe(
      () => {
        this.formComment.reset();
        this.formCommentEl.reset();
      },
      (err) => (this.error = err())
    );
  }

  navLeft() {
    if (this.prevPage == 0) return;
    else {
      this.prevPage--;
      this.nextPage = this.prevPage;
      this.router.navigate(['dishDetail', this.prevPage]);
    }
  }

  navRight() {
    if (this.nextPage >= this.idList.length - 1) return;
    else {
      this.nextPage++;
      this.prevPage = this.nextPage;
      this.router.navigate(['dishDetail', this.nextPage]);
    }
  }
}

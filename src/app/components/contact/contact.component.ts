import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactOptions, Contact } from '../../Types/contact';
import { Utils } from '../../inmutables/const';
import { FeedbackService } from '../../services/feedback.service';
const { errorManager, errorMessages } = Utils.components.contact;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  data!: FormGroup;
  contactoptions = ContactOptions;
  @ViewChild('dataForm') dataForm: any;
  constructor(private form: FormBuilder, private feed: FeedbackService) {
    this.bindingData();
    this.data.valueChanges.subscribe(() => this.formValidity());
    this.formValidity();
  }

  ngOnInit(): void {}

  error: string = '';
  fieldsErrors: any = errorManager;
  errorMessages: any = errorMessages;

  bindingData() {
    this.data = this.form.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(3),
        ],
      ],
      telnum: [, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: true,
      contacttype: 'None',
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  formValidity() {
    if (!this.data) return;
    this.dataForm = this.data;
    for (let field in this.fieldsErrors) {
      if (!this.fieldsErrors.hasOwnProperty(field)) return;
      this.fieldsErrors[field] = '';
      let validate = this.data.get(field);
      if (validate && validate.dirty && !validate.valid && !validate.touched) {
        for (let key in validate.errors) {
          let messages = this.errorMessages[field];
          this.fieldsErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  saveForm() {
    this.feed.postFeedB(<Contact>this.data.value).subscribe(
      () => {
        this.data.reset();
        this.dataForm.reset();
      },
      (err) => (this.error = err())
    );
  }
}

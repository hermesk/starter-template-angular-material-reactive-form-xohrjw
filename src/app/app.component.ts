import { Component, OnInit, EventEmitter } from "@angular/core";
import { SharedService } from './shared.service';
import { Subject } from 'rxjs'
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  filterEventEmitter = new Subject(); // also can be eventemitter
  formGroup: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: SharedService
    ) {}
  get form() { return this.formGroup.controls};
  ngOnInit() {
    this.createForm();
    this.service.filterEventSource(this.filterEventEmitter)
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      description: [null],
      password: [null, Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.valid) {
      // console.log("form", this.formGroup.value);
      this.filterEventEmitter.next(this.formGroup.value)
    }
  }
}

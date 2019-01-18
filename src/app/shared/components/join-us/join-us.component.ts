import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  submitForm: FormGroup;
  msg: string = null;
  edited = true;
  private emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.submitForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailRegExp)])
    });
  }

  onSubmit() {
    this.dataService.create('', this.submitForm.value).subscribe();
      this.msg = 'Congratulations! You are with us!';
      this.edited = false;
  }

  invalidEmail() {
    return !this.submitForm.get('email').valid && this.submitForm.get('email').touched;
  }

}

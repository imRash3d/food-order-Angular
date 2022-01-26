import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  isLogin;
  cartdetails;
  template;
  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      email:[''],
      mobile:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip_code:['',Validators.required],
    })
  }

  ngOnInit() {

  }


   submit() {
    console.log(this.form.getRawValue)

  }



}

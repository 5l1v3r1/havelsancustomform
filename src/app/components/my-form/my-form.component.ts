
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  path = environment.apiPath;
  form : FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    address:new FormControl('',[Validators.required,Validators.minLength(20)])
  })

}

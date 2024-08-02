import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CreateUserService } from '../services/create-user.service';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, NgIf, FormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private userService: CreateUserService) {}

  onChange(email: any) {
    // console.log(email);
  }
  submit(f: any) {
    this.userService.validate(f.value.email, f.value.Password);
    console.log(f.value);
    console.log(f);
  }
}

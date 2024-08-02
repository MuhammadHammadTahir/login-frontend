import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  onChange(email: any) {
    console.log(email);
  }
  submit(f: any) {
    console.log(f.value);
    console.log(f);
  }
}

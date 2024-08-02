import { Component, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CreateUserService } from '../services/create-user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private userService: CreateUserService) {}

  @Input("title") title!: string;
  @Input("button") button!: string;
  @Input("linkButton") linkButton!: string;
  @Input("message") message!: string;
  @Input("routePath") routePath!: string;
  onChange(email: any) {
    // console.log(email);
  }
  submit(f: any) {
    if(this.button == "Login") {
      this.userService.validate(f.value.email, f.value.Password);
    }
    else{
      this.userService.create(f.value.email, f.value.Password);
    }
    console.log(f.value);
    console.log(f);
  }
}

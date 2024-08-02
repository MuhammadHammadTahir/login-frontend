import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-frontend';
}

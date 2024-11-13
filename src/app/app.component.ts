import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hogar';
}

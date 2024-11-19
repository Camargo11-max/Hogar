import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.scss'
})
export class AcercaComponent {

}

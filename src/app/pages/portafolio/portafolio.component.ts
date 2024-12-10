import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardsPortafolioComponent } from "../cards-portafolio/cards-portafolio.component";

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [HeaderComponent, CardsPortafolioComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

}

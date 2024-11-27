import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardsComponent } from '../cards/cards.component';


@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [HeaderComponent, CardsComponent],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss'
})

export class ComprasComponent {


}

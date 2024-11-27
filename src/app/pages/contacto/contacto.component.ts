import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [HeaderComponent, FormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})

export class ContactoComponent {




}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({ 
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})

export class FormularioComponent {

  contactoForm =new FormGroup ({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30) ]),
    apellido: new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(30)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
    codigo: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    ciudad: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    municipio: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
  })


updateUser (event:any){
event.preventDefault();
}

enviarformulario(){
  console.log(this.contactoForm, 'formulario contacto')
}

}



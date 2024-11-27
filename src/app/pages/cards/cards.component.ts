import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  informacionservicio = [{
    titulo:'Baño',
    semanas:'1-4',
    imagen: 'repacion baños.jpeg',
    precio:'11.700.296',
    button: Function,
    texto: 'baño' },
  
  { titulo:'Cocina',
    semanas:'4-8',
    imagen: 'reparacion de cocinas.jpeg',
    precio:'16.380.415',
    button: Function,
    texto: 'cocina' },
      
  { titulo:'Habitaciones',
    semanas:'2-4',
    imagen: 'reparacion habitacion.jpeg',
    precio:'21.060.533',
    button: Function,
    texto: 'habitaciones' },
    
  { titulo:'Fachadas',
    semanas:'2-4',
    imagen: 'fachada.jpeg',
    precio:'17.316.438',
    button: Function,
    texto: 'fachadas'}, 
  
  {  titulo:'Sala-comedor',
     semanas:'3-6',
     imagen: 'sala-comedor.jpeg',
     precio:'14.040.355',
     button: Function,
     texto: 'sala' },
     
    
  { titulo:'Zona de lavado',
    semanas:'2-5',
    imagen: 'patio.jpeg',
    precio:'9.360.237',
    button: Function,
    texto: 'zona lavado'
  }]

  countCart=0;
  
  agregarProducto(producto:string){

    let carrito:any = [localStorage.getItem('listaCarrito') || {} ];
    console.log(carrito);
    const existeProducto = carrito.find((item:any) => item.id == producto) 
        
    if (existeProducto){
        existeProducto.cantidad += 1
    } else {
        carrito.push({id:producto, cantidad:1})
    }

   localStorage.setItem('listaCarrito',carrito);
   this.countCart=carrito.length;
   alert ('Vas a renovar tu ' +  producto)
}



}


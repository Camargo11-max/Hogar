import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/services.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[CarritoService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent implements OnInit{

  isOn: boolean = false;
  listadoCarrito:any;

  constructor(private carritoService: CarritoService) {
  }

  informacionservicio = [{
    titulo:'Baño',
    semanas:'1-4',
    imagen: 'repacion baños.jpeg',
    precio:'11.700.296',
    button: Function,
    texto: 'Agregar al Carrito' },
  
  { titulo:'Cocina',
    semanas:'4-8',
    imagen: 'reparacion de cocinas.jpeg',
    precio:'16.380.415',
    button: Function,
    texto: 'Agregar al Carrito' },
      
  { titulo:'Habitaciones',
    semanas:'2-4',
    imagen: 'reparacion habitacion.jpeg',
    precio:'21.060.533',
    button: Function,
    texto: 'Agregar al Carrito' },
    
  { titulo:'Fachadas',
    semanas:'2-4',
    imagen: 'fachada.jpeg',
    precio:'17.316.438',
    button: Function,
    texto: 'Agregar al Carrito'}, 
  
  {  titulo:'Sala-comedor',
     semanas:'3-6',
     imagen: 'sala-comedor.jpeg',
     precio:'14.040.355',
     button: Function,
     texto: 'Agregar al Carrito' },
     
    
  { titulo:'Zona de lavado',
    semanas:'2-5',
    imagen: 'patio.jpeg',
    precio:'9.360.237',
    button: Function,
    texto: 'Agregar al Carrito'
  }]

  countCart=0;
  
  ngOnInit() {
    this.carritoService.carritoSubject.subscribe(listaCarrito => {
      console.log('Carrito actualizado:', listaCarrito);
      this.listadoCarrito = listaCarrito;
      this.countCart = this.listadoCarrito.length;
    });
  }

  agregarAlCarrito(producto: any) {
    const carritoActual = this.carritoService.carritoSubject.getValue();
    const productoExistente = carritoActual.find(item => item.id === producto);

    if (productoExistente) {
      // Si el producto ya existe, actualizar la cantidad
      productoExistente.cantidad += 1;
    } else {
      // Si el producto no existe, agregarlo al carrito
      carritoActual.push({id: producto, cantidad: 1});
    }

    // Actualizar el BehaviorSubject con el nuevo carrito
    this.carritoService.carritoSubject.next(carritoActual);

    // Persistir el carrito en localStorage
    localStorage.setItem('listaCarrito', JSON.stringify(carritoActual));
    this.countCart = carritoActual.length;
  }

  toggleListado() {
    this.isOn = !this.isOn;
  }
}


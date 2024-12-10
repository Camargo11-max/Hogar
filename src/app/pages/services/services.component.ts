import {BehaviorSubject} from 'rxjs';

//  cargar el carrito guardado en localStorage
function cargarCarritoDesdeLocalStorage(): any[] {
  const carritoGuardado = localStorage.getItem('ListaCarrito');
  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

export class CarritoService {
  carritoSubject = new BehaviorSubject<any[]>(cargarCarritoDesdeLocalStorage());

  constructor() { }
}
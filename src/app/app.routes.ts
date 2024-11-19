import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComprasComponent } from './pages/compras/compras.component';

export const routes: Routes = [
    {
    path: '',
    component: PrincipalComponent,
},

{
    path: 'portafolio',
    component: PortafolioComponent
},
{
    path: 'acerca',
    component: AcercaComponent
},

{
    path: 'contacto',
    component: ContactoComponent
},

{
    path: 'compras',
    component: ComprasComponent
}];




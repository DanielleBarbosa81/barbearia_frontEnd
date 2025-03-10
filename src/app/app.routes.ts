import { Routes } from '@angular/router';
import { EditClientComponent } from './components/cliente/edit-clientes/edit-clients.component';
import { NewClienteComponent } from './components/cliente/new-clientes/new-cliente.component';
import { ListClientesComponent } from './components/cliente/list-clientes/list-clientes.component';
//import { AgendaMesComponent } from './components/agenda/agenda-mes/agenda-mes.component';

export const routes: Routes = [
{path: 'cliente/edit-clients/:id', component: EditClientComponent, data: { title: 'Atualizar Cliente'}},
{path: 'cliente/new-cliente', component: NewClienteComponent, data:{title: 'Cadastrar Cliente'}},
{path: 'cliente/list-clientes', component: ListClientesComponent, data: {title: 'Listar Clientes'}},
//{path: 'agenda/mes', component: AgendaMesComponent, data:{title: 'Agendamentos do Mês'}},
{path: '**', redirectTo: 'agenda/mes'}

];

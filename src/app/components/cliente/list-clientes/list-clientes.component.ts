import { Component, Inject } from '@angular/core';
import { ClienteService } from '../../../services/api-cliente/cliente/cliente.service';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { IClienteService } from '../../../services/api-cliente/cliente/Icliente.service';


@Component({
  selector: 'app-list-clientes',
  imports: [],
  templateUrl: './list-clientes.component.html',
  styleUrl: './list-clientes.component.css',
   providers: [
      { provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClienteService }
    ]
})
export class ListClientesComponent {

    constructor(
      @Inject(SERVICES_TOKEN.HTTP.CLIENTE) private readonly httpService: IClienteService,



    ){}
}

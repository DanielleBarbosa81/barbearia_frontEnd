import { Component, Inject, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { IClienteService } from '../../../services/api-cliente/cliente/Icliente.service';
import { ClienteFormComponent } from '../../cliente-form/cliente-form.component';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { ClienteService } from '../../../services/api-cliente/cliente/cliente.service';
import { ClienteModelForm } from '../cliente.model';
import { SnackbarManagerService } from '../../../services/snackbar-manager.service';
import { ISnackbarManagerService } from '../../../services/isnackbar-manager.service';
//import { IAgendaService } from '../../../services/api-agenda/agenda/Iagenda.service';

@Component({
  selector: 'app-new-client',
  imports: [ClienteFormComponent],
  templateUrl: './new-cliente.component.html',
  styleUrl: './new-cliente.component.scss',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClienteService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }

  ]
})
export class NewClienteComponent implements OnDestroy {

  private httpSubscription?: Subscription


  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENTE) private readonly httpService: IClienteService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: ISnackbarManagerService,
   // @Inject(SERVICES_TOKEN.AGENDA) private readonly snackBarManager: IAgendaService,
    private readonly router: Router
  ) { }

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe()
    }
  }

  onSubmitCliente(value: ClienteModelForm) {
    const { id, ...request } = value
    this.httpSubscription = this.httpService.save(request).subscribe(_ => {
      this.snackBarManager.show('Usuário cadastrado com sucesso')
      this.router.navigate(['clientes/list'])
    })
  }


}











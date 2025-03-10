import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/api-cliente/cliente/cliente.service';
import { SERVICES_TOKEN } from '../../../services/service.token';
import { IClienteService } from '../../../services/api-cliente/cliente/Icliente.service';
//import { ClienteFormComponent } from '../../cliente-form/cliente-form.component';
import { SnackbarManagerService } from '../../../services/snackbar-manager.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModelForm } from '../cliente.model';
//import { ISnackbarManagerService } from '../../../services/isnackbar-manager.service';



@Component({
  selector: 'app-edit-client',
  //imports: [ClienteFormComponent],
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss'],
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClienteService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ]
})
export class EditClientComponent implements OnInit, OnDestroy {

  private httpsubscriptions: Subscription[] = []

  cliente: ClienteModelForm = { id: 0, nome: '', email: '', telefone: '' }
  snackBarManager: any;
  client: any;

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENTE) private readonly httpService: IClienteService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (!id) {
      this.snackBarManager.show('Erro ao recuperar informações do cliente')
      this.router.navigate(['clients/list'])
      return
    }


   /* this.httpsubscriptions?.push(this.httpService.findById(Number(id)).subscribe(
      (data: ClienteModelForm) => this.client = data,
      error => console.error(error)
    ))*/
  }

  ngOnDestroy(): void {
    this.httpsubscriptions.forEach(s => s.unsubscribe())
  }

  onSubmitClient(value: ClienteModelForm) {
    const { id, ...request } = value
    if (id) {
      this.httpsubscriptions?.push(this.httpService.update(id, request).subscribe(_ => {
        this.snackBarManager.show('Usuário autalizado com sucesso')
        this.router.navigate(['clients/list'])

      }))
      return
    }
    this.snackBarManager.show('Um erro inesperado aconteceu')
    this.router.navigate(['clients/list'])
  }

}

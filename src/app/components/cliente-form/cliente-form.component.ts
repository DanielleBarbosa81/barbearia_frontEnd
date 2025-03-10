import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClienteModelForm } from '../cliente/cliente.model';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cliente-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective
  ],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent {
  @Input() cliente: ClienteModelForm = { id: 0, nome: '', email: '', telefone: '' };

  @Output() clienteSubmit = new EventEmitter<ClienteModelForm>();
  clientSubmited: any;

  onSubmit(_: NgForm) {
    this.clientSubmited.emit(this.cliente)
  }
}

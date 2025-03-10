import { InjectionToken } from "@angular/core";
import { Cliente } from "../models/cliente";
import { IClienteService } from "../services/api-cliente/cliente/Icliente.service";
import { ISnackbarManagerService } from "./isnackbar-manager.service";
//import { IAgendaService } from  "./api-cliente/agenda/Iagenda.service";
//import { IBarbeiroService } from "./api-barbeiro/Ibarbeiro.service";

export const SERVICES_TOKEN ={
  HTTP:{
    CLIENTE: new InjectionToken<IClienteService>('SERVICES_TOKEN.HTTP.Cliente'),
    //AGENDA: new InjectionToken<IAgendaService>('SERVICES_TOKEN.HTTP.agenda'),
   //BARBEIRO: new InjectionToken<IBarbeiroService>('SERVICES_TOKEN.HTTP.barbeiro'),

  },
  SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR')
}

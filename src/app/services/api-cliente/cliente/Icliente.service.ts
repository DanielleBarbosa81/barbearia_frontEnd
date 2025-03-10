import { Observable } from "rxjs";
import { DetailClienteResponse, ListClienteResponse, SaveClienteRequest, SaveClienteResponse, UpdateClienteResponse } from "./cliente.model";
import { UpdateClienteRequest } from "./cliente.model";

export interface IClienteService{
  findById(arg0: number): unknown;

  save(request: SaveClienteRequest): Observable<SaveClienteResponse>

  update(id: number, request: UpdateClienteRequest): Observable<UpdateClienteResponse>

  delete(id: number): Observable<void>

  list():Observable<ListClienteResponse[]>

  findByID(id: number): Observable<DetailClienteResponse>


}

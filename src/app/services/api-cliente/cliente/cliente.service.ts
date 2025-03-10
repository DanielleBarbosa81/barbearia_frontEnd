import { Injectable } from '@angular/core';
import { IClienteService } from './Icliente.service';
import { DetailClienteResponse, ListClienteResponse, SaveClienteRequest, SaveClienteResponse, UpdateClienteRequest, UpdateClienteResponse } from './cliente.model';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';
import { ClienteModelForm } from '../../../components/cliente/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService implements IClienteService {

  private readonly basePath = environment.apiUrl;

  constructor(private http: HttpClient) { }
  findByID(id: number): Observable<DetailClienteResponse> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Observable<ClienteModelForm> {
    return this.http.get<ClienteModelForm>(`${this.basePath}cliente/${id}`);

  }
  save(request: SaveClienteRequest): Observable<SaveClienteResponse> {
    return this.http.post<SaveClienteResponse>(`${this.basePath}cliente`, request)
  }
  update(id: number, request: UpdateClienteRequest): Observable<UpdateClienteResponse> {
    return this.http.put<UpdateClienteResponse>(`${this.basePath}cliente/${id}`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}cliente/${id}`)
  }
  list(): Observable<ListClienteResponse[]> {
    return this.http.get<ListClienteResponse[]>(`${this.basePath}cliente`)
  }





}

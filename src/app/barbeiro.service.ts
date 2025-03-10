import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barbeiro } from './models/barbeiro';

@Injectable({
  providedIn: 'root',
})
export class BarbeiroService {
  private baseUrl = 'http://localhost:8080/barbeiros';

  constructor(private http: HttpClient) {}

  getBarbeiros(): Observable<Barbeiro[]> {
    return this.http.get<Barbeiro[]>(`${this.baseUrl}/barbeiros`);
  }

  getBarbeirosByName(nome: string): Observable<Barbeiro[]> {
    return this.http.get<Barbeiro[]>(`${this.baseUrl}/barbeiroNome?nome=${nome}`);
  }

  createBarbeiro(barbeiro: Barbeiro): Observable<Barbeiro> {
    return this.http.post<Barbeiro>(this.baseUrl, barbeiro);
  }

  deleteBarbeiro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

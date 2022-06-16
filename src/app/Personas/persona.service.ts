import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from './Persona';
const controller = '/Persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Persona[]> {
    const urlApi = `${environment.baseUrlApi}/Persona`;
    return this.httpClient.get<Persona[]>(urlApi)
  }
  post(persona: Persona): Observable<Persona> {
    const urlApi = `${environment.baseUrlApi}/Persona`;
    return this.httpClient.post<Persona>(urlApi, persona);
  }

}

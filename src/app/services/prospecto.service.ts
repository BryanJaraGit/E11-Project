import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prospecto } from '../interfaces/prospecto';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Prospecto/';

  constructor(private http:HttpClient) { }

  getProspectos(): Observable<Prospecto[]> {
    return this.http.get<Prospecto[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getProspecto(id: number): Observable<Prospecto> {
    return this.http.get<Prospecto>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteProspecto(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addProspecto(prospecto: Prospecto): Observable<Prospecto>{
    return this.http.post<Prospecto>(`${this.myAppUrl}${this.myApiUrl}`, prospecto);
  }

  updateProspecto(id:number, prospecto:Prospecto): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, prospecto);
  }
}

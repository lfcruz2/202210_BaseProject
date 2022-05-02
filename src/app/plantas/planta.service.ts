import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl: string = environment.baseUrlParcial1LuisCruz + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }

}

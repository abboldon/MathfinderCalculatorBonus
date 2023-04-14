import { Injectable } from '@angular/core';
import { personajesRegistrados } from 'src/assets/data/personajesRegistrados';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor() { }

  public recuperaPersonajes(){
    return personajesRegistrados
  }
}

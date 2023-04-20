import { Injectable } from '@angular/core';
import { Bonus } from 'src/assets/model/entities/Bonus';
import { bonusRegistrados } from 'src/assets/data/bonusRegistrados';
import { Personaje } from 'src/assets/model/entities/Personaje';

@Injectable({
  providedIn: 'root',
})
export class CalculadorService {
  constructor() {}

  public recuperaBonus() {
    /*let bonus = new Bonus();
      let bonusRegistrados : Bonus[]; */
    return bonusRegistrados;
  }

  public aplicarBonos(personaje: Personaje, bono: Bonus) {
    let sumarRestar: number = 1;

    if (!bono.activo) {
      sumarRestar = -1;
    }
    //lo llamamos dos veces, uno para cada modificador
    if (bono.tipo1 != 'ESP') {
      this.aplicarBono(bono.tipo1, bono.mod1, sumarRestar, personaje);
      this.aplicarBono(bono.tipo2, bono.mod2, sumarRestar, personaje);
    } else {
      //cada uno de los bonos especiales tendrá su función de cálculo
      if (bono.nombre == 'Acelerar') {
        this.aplicaAcelerar(personaje, sumarRestar);
      }
      if (bono.nombre == 'Ataque Poderoso') {
        this.aplicaAtaquePoderoso(personaje, sumarRestar);
      }
    }
  }

  public aplicarBono(
    tipo: string,
    mod: number,
    sumarRestar: number,
    personaje: Personaje
  ) {
    if (mod != null && mod > 0) {
      switch (tipo) {
        case 'FUE': {
          if (personaje.tipAtq != 'DI') {
            personaje.atq1 += (mod / 2) * sumarRestar;
            personaje.dano += (mod / 2) * sumarRestar;
          }
          break;
        }
        case 'DES': {
          if (personaje.tipAtq == 'DI') {
            personaje.atq1 += (mod / 2) * sumarRestar;
          }
          personaje.ca += (mod / 2) * sumarRestar;
          personaje.tsref += (mod / 2) * sumarRestar;
          break;
        }
        case 'CON': {
          personaje.pg += (mod / 2) * sumarRestar;
          personaje.tsfor += (mod / 2) * sumarRestar;
          break;
        }
        case 'INT': {
          personaje.int += (mod / 2) * sumarRestar;
          break;
        }
        case 'SAB': {
          personaje.sab += (mod / 2) * sumarRestar;
          personaje.tsvol += (mod / 2) * sumarRestar;
          break;
        }
        case 'CAR': {
          personaje.car += (mod / 2) * sumarRestar;
          break;
        }
        case 'ATQ': {
          personaje.atq1 += mod * sumarRestar;
          break;
        }
        case 'DAN': {
          personaje.dano += mod * sumarRestar;
          break;
        }
        case 'CA': {
          personaje.ca += mod * sumarRestar;
          break;
        }
        case 'SAL': {
          personaje.tsfor += mod * sumarRestar;
          personaje.tsref += mod * sumarRestar;
          personaje.tsvol += mod * sumarRestar;
          break;
        }
        case 'TSREF': {
          personaje.tsref += mod * sumarRestar;
          break;
        }
        case 'TSFORT': {
          personaje.tsfor += mod * sumarRestar;
          break;
        }
        case 'TSVOL': {
          personaje.tsvol += mod * sumarRestar;
          break;
        }
      }
    }
  }

  public aplicaAcelerar(personaje: Personaje, sumarRestar: number) {
    //acelerar es ataque + 1, CA + 1 y TSREF +1 y un ataque adicional que no se tiene en cuenta
    personaje.atq1 += 1 * sumarRestar;
    personaje.ca += 1 * sumarRestar;
    personaje.tsref += 1 * sumarRestar;
  }

  public apilcaFuria(personaje: Personaje, sumarRestar: number) {

  }

  public aplicaAtaquePoderoso(personaje: Personaje, sumarRestar: number) {
    let bonoXatq: number = 0;
    let bonoXdan: number = 0;

    if (personaje.atqBase != null) {
      bonoXatq = Math.trunc(personaje.atqBase / 4) + 1;
      bonoXdan = bonoXatq * 2;
    }

    //armas cuerpo a cuerpo a dos manos un 50% más en el daño
    if (personaje.tipAtq == 'CC2'){
      bonoXdan = Math.round(bonoXdan * 1.5);
    }

    //finalmente volcamos el bono
    personaje.atq1 -= (bonoXatq * sumarRestar);
    personaje.dano += (bonoXdan * sumarRestar);
  }

  public aplicaArmaMagicaMayor(personaje: Personaje, sumarRestar: number) {
    let bonoXatqDan: number = 0;

    //+1 ataque y daño por cada cuatro niveles máximo 5
    if (personaje.nivel != null) {
      bonoXatqDan = Math.trunc(personaje.nivel / 4) + 1;
    }
    if (bonoXatqDan > 5) {
      bonoXatqDan = 5;
    }

    //finalmente volcamos el bono
    personaje.atq1 += (bonoXatqDan * sumarRestar);
    personaje.dano += (bonoXatqDan * sumarRestar);
  }

  public aplicaArcanus(ataqDano: number, danoD6: string) {}
}

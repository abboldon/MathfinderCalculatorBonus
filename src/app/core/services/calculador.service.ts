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

  public aplicaBono(bono: Bonus, personaje: Personaje) {
    console.log(
      'bono1 ' +
        bono.tipo1 +
        '-' +
        ' bono2' +
        bono.tipo2 +
        ' activo ' +
        bono.activo
    );
    console.log(
      'mod1 ' + bono.mod1 + '-' + ' mod2' + bono.mod2 + ' activo ' + bono.activo
    );
    if (bono.activo) {
      if (bono.mod1 != null && bono.mod1 > 0) {
        switch (bono.tipo1) {
          case 'FUE': {
            console.log('entra1');
            personaje.atq1 += bono.mod1 / 2;
            console.log('resultado' + personaje.atq1);
            personaje.dano += bono.mod1 / 2;
            break;
          }
          case 'DES': {
            personaje.atq1 += bono.mod1 / 2;
            personaje.tsref += bono.mod1 / 2;
            break;
          }
          case 'CON': {
            personaje.atq1 += bono.mod1 / 2;
            personaje.tsfor += bono.mod1 / 2;
            break;
          }
          case 'INT': {
            personaje.atq1 += bono.mod1 / 2;
            break;
          }
          case 'SAB': {
            personaje.atq1 += bono.mod1 / 2;
            personaje.tsvol += bono.mod1 / 2;
            break;
          }
          case 'CAR': {
            break;
          }
          case 'ATQ': {
            personaje.atq1 += bono.mod1;
            break;
          }
          case 'DAN': {
            personaje.dano += bono.mod1;
            break;
          }
          case 'SAL': {
            personaje.tsfor += bono.mod1;
            personaje.tsref += bono.mod1;
            personaje.tsvol += bono.mod1;
            break;
          }
        }
      }
    } else {
      if (bono.mod1 != null && bono.mod1 > 0) {
        switch (bono.tipo1) {
          case 'FUE': {
            console.log('entra2');
            personaje.atq1 -= bono.mod1 / 2;
            personaje.dano -= bono.mod1 / 2;
            break;
          }
          case 'DES': {
            personaje.atq1 -= bono.mod1 / 2;
            personaje.tsref -= bono.mod1 / 2;
            break;
          }
          case 'CON': {
            personaje.atq1 -= bono.mod1 / 2;
            personaje.tsfor -= bono.mod1 / 2;
            break;
          }
          case 'INT': {
            personaje.atq1 -= bono.mod1 / 2;
            break;
          }
          case 'SAB': {
            personaje.atq1 -= bono.mod1 / 2;
            personaje.tsvol -= bono.mod1 / 2;
            break;
          }
          case 'CAR': {
            break;
          }
          case 'ATQ': {
            personaje.atq1 -= bono.mod1;
            break;
          }
          case 'DAN': {
            personaje.dano -= bono.mod1;
            break;
          }
          case 'SAL': {
            personaje.tsfor -= bono.mod1;
            personaje.tsref -= bono.mod1;
            personaje.tsvol -= bono.mod1;
            break;
          }
        }
      }
    }

    //para el segundo
    if (bono.activo) {
      if (bono.mod2 != null && bono.mod2 > 0) {
        switch (bono.tipo2) {
          case 'FUE': {
            console.log('entra3');
            personaje.atq2 += bono.mod2 / 2;
            personaje.dano += bono.mod2 / 2;
            break;
          }
          case 'DES': {
            personaje.atq2 += bono.mod2 / 2;
            personaje.tsref += bono.mod2 / 2;
            break;
          }
          case 'CON': {
            personaje.atq2 += bono.mod2 / 2;
            personaje.tsfor += bono.mod2 / 2;
            break;
          }
          case 'INT': {
            personaje.atq2 += bono.mod2 / 2;
            break;
          }
          case 'SAB': {
            personaje.atq2 += bono.mod2 / 2;
            personaje.tsvol += bono.mod2 / 2;
            break;
          }
          case 'CAR': {
            break;
          }
          case 'ATQ': {
            personaje.atq2 += bono.mod2;
            break;
          }
          case 'DAN': {
            personaje.dano += bono.mod2;
            break;
          }
          case 'SAL': {
            personaje.tsfor += bono.mod2;
            personaje.tsref += bono.mod2;
            personaje.tsvol += bono.mod2;
            break;
          }
        }
      }
    } else {
      if (bono.mod2 != null && bono.mod2 > 0) {
        switch (bono.tipo2) {
          case 'FUE': {
            console.log('entra4');
            personaje.atq2 -= bono.mod2 / 2;
            personaje.dano -= bono.mod2 / 2;
            break;
          }
          case 'DES': {
            personaje.atq2 -= bono.mod2 / 2;
            personaje.tsref -= bono.mod2 / 2;
            break;
          }
          case 'CON': {
            personaje.atq2 -= bono.mod2 / 2;
            personaje.tsfor -= bono.mod2 / 2;
            break;
          }
          case 'INT': {
            personaje.atq2 -= bono.mod2 / 2;
            break;
          }
          case 'SAB': {
            personaje.atq2 -= bono.mod2 / 2;
            personaje.tsvol -= bono.mod2 / 2;
            break;
          }
          case 'CAR': {
            break;
          }
          case 'ATQ': {
            personaje.atq2 -= bono.mod2;
            break;
          }
          case 'DAN': {
            personaje.dano -= bono.mod2;
            break;
          }
          case 'SAL': {
            personaje.tsfor -= bono.mod2;
            personaje.tsref -= bono.mod2;
            personaje.tsvol -= bono.mod2;
            break;
          }
        }
      }
    }
  }
}

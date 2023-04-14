import { Bonus } from '../model/entities/Bonus';

export const bonusRegistrados: Bonus[] = [
  {
    idBonus: 1,
    nombre: 'Fuerza Toro',
    tipo1: 'FUE',
    tipo2: '',
    mod1: 4,
    mod2: 0,
    activo: false,
  },
  {
    idBonus: 2,
    nombre: 'Gracia Felina',
    tipo1: 'DES',
    tipo2: '',
    mod1: 4,
    mod2: 0,
    activo: false,
  },
  {
    idBonus: 4,
    nombre: 'Heroismo',
    tipo1: 'ATQ',
    tipo2: 'SAL',
    mod1: 2,
    mod2: 2,
    activo: false,
  },
  {
    idBonus: 5,
    nombre: 'Heroismo Mayor',
    tipo1: 'ATQ',
    tipo2: 'SAL',
    mod1: 4,
    mod2: 4,
    activo: false,
  },
  {
    idBonus: 10,
    nombre: 'Acelerar',
    tipo1: 'ESP',
    tipo2: 'SAL',
    mod1: 0,
    mod2: 1,
    activo: false,
  },
  {
    idBonus: 15,
    nombre: "Ataque Poderoso",
    tipo1: "ATQ",
    tipo2: "DAN",
    mod1: -1,
    mod2: 2,
    activo: false
  },
  {
    idBonus: 20,
    nombre: "Arcanus(1)",
    tipo1: "ATQ",
    tipo2: "ESP",
    mod1: 1,
    mod2: 3,
    activo: false
  }
];

//import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//@Entity("PERSONAJE")
export class Personaje {
  //@PrimaryGeneratedColumn({ type: "integer", name: "IDPERSO", nullable: true })
  idperso: number = 0;

  //@Column("text", { name: "NOMBRE", nullable: true })
  nombre: string = '';

  atqBase: number = 0;

  //@Column("integer", { name: "ATQ1", nullable: true, default: () => "0" })
  atq1: number = 0;

  //@Column("integer", { name: "ATQ2", nullable: true, default: () => "0" })
  atq2: number = 0;

  //@Column("integer", { name: "ATQ3", nullable: true, default: () => "0" })
  atq3: number = 0;

  //@Column("integer", { name: "ATQ4", nullable: true, default: () => "0" })
  atq4: number = 0;

  //@Column("integer", { name: "ATQ5", nullable: true, default: () => "0" })
  atq5: number = 0;

  //@Column("integer", { name: "FUE", nullable: true, default: () => "10" })
  fue: number = 0;

  //@Column("integer", { name: "DES", nullable: true, default: () => "10" })
  des: number = 0;

  car: number = 0;

  sab: number = 0;

  int: number = 0;

  //@Column("integer", { name: "CA", nullable: true, default: () => "10" })
  ca: number = 0;

  //@Column("integer", { name: "NIVEL", nullable: true })
  nivel: number = 0;

  //@Column("integer", { name: "TSREF", nullable: true })
  tsref: number = 0;

  //@Column("integer", { name: "TSFOR", nullable: true })
  tsfor: number = 0;

  //@Column("integer", { name: "TSVOL", nullable: true })
  tsvol: number = 0;

  pg: number = 0;

  dano: number = 0;

  tipAtq: string = 'CC';
}

//import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//@Entity("BONUS")
export class Bonus {
  //@PrimaryGeneratedColumn({ type: "integer", name: "IDBONUS", nullable: true })
  idBonus: number = 0;

  //@Column("text", { name: "NOMBRE" })
  nombre: string = "";

  //@Column("text", { name: "TIPO1", nullable: true })
  tipo1: string = "";

  //@Column("text", { name: "TIPO2", nullable: true })
  tipo2: string = "";

  //@Column("integer", { name: "MOD1", nullable: true, default: () => "0" })
  mod1: number = 0;

  //@Column("integer", { name: "MOD2", nullable: true, default: () => "0" })
  mod2: number = 0;

  activo : boolean = false;
}

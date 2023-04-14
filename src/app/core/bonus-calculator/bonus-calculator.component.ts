import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { Bonus } from 'src/assets/model/entities/Bonus';
import { Personaje } from 'src/assets/model/entities/Personaje';
import { CalculadorService } from '../services/calculador.service';
import { PersonajeService } from '../services/personaje.service';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-bonus-calculator',
  templateUrl: './bonus-calculator.component.html',
  styles: [],
})
export class BonusCalculatorComponent implements OnInit {
  public bonusExistentes: Bonus[] = [];
  public personajesExistentes: Personaje[] = [];
  public personaje: Personaje = new Personaje();
  public danoAdicional: string = '1D6?';
  public personajeSeleccionado : string ="";

  departamentotext: string[] = ["CRAMER","DURZAK","FRIDA","ZOLTAN"]
  Items:  string[] = [];
  autoFilter: Observable<string[]>;
  formControl = new FormControl();

  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Items.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(
    private calculadorService: CalculadorService,
    private personajeService: PersonajeService,
    private readonly formBuilder: FormBuilder
  ) {
    this.bonusExistentes = this.calculadorService.recuperaBonus();
    this.personajesExistentes = this.personajeService.recuperaPersonajes();

    //inicializamos el combo
    this.cargaComboPersonajes();
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );

  }

  public cargaComboPersonajes(){
    this.Items = [""];
    for (let i = 0; i < this.personajesExistentes.length; i ++){
      this.Items.push(this.personajesExistentes[i].nombre);
    }
  }

  public cargarPersonaje(){
    console.log('recuperamos' + this.personajesExistentes.filter(personaje => personaje.nombre = this.personajeSeleccionado)[0]);
    if (this.personajesExistentes.filter(personaje => personaje.nombre = this.personajeSeleccionado)[0] != null) {
      this.personaje = this.personajesExistentes.filter(personaje => personaje.nombre = this.personajeSeleccionado)[0];
    }


  }

  ngOnInit() {}

  activarBono(bono: Bonus) {
    if (bono.activo) {
      bono.activo = false;
    } else {
      bono.activo = true;
    }
    console.log(this.personaje.atq1);
    this.calculadorService.aplicaBono(bono, this.personaje);
    console.log(this.personaje.atq1);
  }
}

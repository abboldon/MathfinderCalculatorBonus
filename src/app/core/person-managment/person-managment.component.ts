import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-person-managment',
  templateUrl: './person-managment.component.html',
  styles: [
  ]
})
export class PersonManagmentComponent implements OnInit {
  mostrarInfo: boolean;
  info: string ;


  departamentotext: string[] = ["CRAMER","DURZAK","FRIDA","ZOLTAN"]
  Items:  string[];
  autoFilter: Observable<string[]>;
  formControl = new FormControl(); constructor() {
    this.mostrarInfo = false;
    this.info = '';
    this.Items = this.departamentotext
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );
  }
  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Items.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mostrarInfo = true

  }

}

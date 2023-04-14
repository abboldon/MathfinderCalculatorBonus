import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusCalculatorComponent } from './bonus-calculator/bonus-calculator.component';
import { PersonManagmentComponent } from './person-managment/person-managment.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    BonusCalculatorComponent,
    PersonManagmentComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CoreComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule,
   ReactiveFormsModule
    , MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule, MatButtonToggleModule, MatExpansionModule, MatSlideToggleModule, MatCardModule, MatGridListModule, FlexLayoutModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusCalculatorComponent } from './core/bonus-calculator/bonus-calculator.component';
import { BonusManagmentComponent } from './core/bonus-managment/bonus-managment.component';
import { NotFoundComponent } from './core/core/not-found/not-found.component';
import { PersonManagmentComponent } from './core/person-managment/person-managment.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'bonus-calculator',
    component: BonusCalculatorComponent
  },
  {
    path: 'person-managment',
    component: PersonManagmentComponent
  },
  {
    path: 'bonus-managment',
    component: BonusManagmentComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    BudgetPlannerRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class BudgetPlannerModule { }

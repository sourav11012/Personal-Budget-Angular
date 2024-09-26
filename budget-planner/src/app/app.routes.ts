import { Routes } from '@angular/router';

export const routes: Routes = [
{path:'budget-planner1',loadChildren:()=> import('./budget-planner1/budget-planner1.module').then(m=>m.BudgetPlanner1Module)}
];

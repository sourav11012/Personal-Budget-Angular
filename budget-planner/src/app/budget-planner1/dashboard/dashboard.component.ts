import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  constructor(public router:Router){}

  //Income
lastMonthsIncome = ['January: $1000','February: $1500','March: $1200'];
currentMonthIncome = '$2000';

//Expense
lastMonthsExpense = ['January: $3000','February: $1000','March: $1200'];
currentMonthExpense = '$1000';

//Todo Transactions
todoTransactions = [{
  description:'Pay electricity bill'
},
{description:'Submit monthly report'},
{description:'Buy groceries'},
{description:'Call insurance company'},
]

//Savings
totalCurrentMonthIncome = 2000;
totalCurrentMonthExpense = 1500;

onIncome(){
  this.router.navigate(['/budget-planner/income'])
}
onExpense(){
  this.router.navigate(['/budget-planner/expense'])
}
onTodo(){
  this.router.navigate(['/budget-planner/todo'])
}

get currentMonthSavings(): number{
  return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
}
}

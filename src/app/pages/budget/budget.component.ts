import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  departments = [
  {
    name: 'Marketing',
    region: 'North',
    allocatedBudget: 50000,
    spent: 46000,
    remaining: 4000
  },
  {
    name: 'Research & Development',
    region: 'Central',
    allocatedBudget: 120000,
    spent: 105000,
    remaining: 15000
  },
  {
    name: 'Operations',
    region: 'South',
    allocatedBudget: 80000,
    spent: 60000,
    remaining: 20000
  },
  {
    name: 'IT',
    region: 'West',
    allocatedBudget: 100000,
    spent: 82000,
    remaining: 18000
  }
];;

  constructor() { }

  ngOnInit() {
  }
 departmentsData = [
    { id: 1, name: "Department", region: "North", budgetTotal: 50000, projectsCount: 4, employeesCount: 12 },
    { id: 2, name: "Allocated Budget", region: "Central", budgetTotal: 120000, projectsCount: 3, employeesCount: 15 },
    { id: 3, name: "Spent", region: "South", budgetTotal: 80000, projectsCount: 5, employeesCount: 20 },
    { id: 4, name: "Remaining", region: "East", budgetTotal: 60000, projectsCount: 2, employeesCount: 8 },
    { id: 5, name: "Usage", region: "West", budgetTotal: 100000, projectsCount: 6, employeesCount: 18 },
  ];

   departmentExpenseData = [
    { name: "Department", value: 80000 },
    { name: "R&Allocated Budget", value: 120000 },
    { name: "Spent", value: 100000 },
    { name: "Remaining", value: 60000 },
    { name: "Usage", value: 90000 },
  ];

}

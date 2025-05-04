import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 departmentsData = [
    { id: 1, name: "Marketing", region: "North", budgetTotal: 50000, projectsCount: 4, employeesCount: 12 },
    { id: 2, name: "Research & Development", region: "Central", budgetTotal: 120000, projectsCount: 3, employeesCount: 15 },
    { id: 3, name: "Operations", region: "South", budgetTotal: 80000, projectsCount: 5, employeesCount: 20 },
    { id: 4, name: "Sales", region: "East", budgetTotal: 60000, projectsCount: 2, employeesCount: 8 },
    { id: 5, name: "IT", region: "West", budgetTotal: 100000, projectsCount: 6, employeesCount: 18 },
  ];

   departmentExpenseData = [
    { name: "Marketing", value: 80000 },
    { name: "R&D", value: 120000 },
    { name: "Operations", value: 100000 },
    { name: "Sales", value: 60000 },
    { name: "IT", value: 90000 },
  ];

}

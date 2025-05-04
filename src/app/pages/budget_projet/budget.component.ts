import { Component, OnInit } from "@angular/core";
import { log } from "console";

@Component({
  selector: "app-budget-projet",
  templateUrl: "./budgetprojet.component.html",
  styleUrls: ["./budgetprojet.component.scss"],
})
export class BudgetProjetComponent implements OnInit {
  isFinancier = localStorage.getItem("role")=="financier";
  isManager = localStorage.getItem("role")=="manager";
  constructor() {}

  ngOnInit() {}
  budgets = [
    {
      status: 'Approved',
      dateDeb: '01/10/2025',
      dateFin: '03/31/2025',
      name: "Q1 Outreach Strategy",
      nameRep: "Marketing",
      allocatedBudget: 50000,
      spent: 46000,
      remaining: 4000,
    },
    {
      status: 'Approved',
      dateDeb: '02/01/2025',
      dateFin: '04/15/2025',
      name: "Performance Optimization Initiative",
      nameRep: "Marketing",
      allocatedBudget: 50000,
      spent: 46000,
    },
    {
      status: 'Approved',
      dateDeb: '03/05/2025',
      dateFin: '05/20/2025',
      name: "Search Visibility Boost",
      nameRep: "Marketing",
      allocatedBudget: 50000,
      spent: 46000,
    },
    {
      status: 'Approved',
      dateDeb: '04/10/2025',
      dateFin: '06/30/2025',
      name: "Audience Engagement Plan",
      nameRep: "Marketing",
      allocatedBudget: 50000,
      spent: 46000,
    },
    {
      status: 'Approved',
      dateDeb: '01/15/2025',
      dateFin: '05/15/2025',
      name: "Product Experience Upgrade",
      nameRep: "Research & Development",
      allocatedBudget: 120000,
      spent: 105000,
    },
    {
      status: 'Approved',
      dateDeb: '02/20/2025',
      dateFin: '06/30/2025',
      name: "Insight Discovery Program",
      nameRep: "Research & Development",
      allocatedBudget: 120000,
      spent: 105000,
    },
  ];



  onApprove(dept){
    dept.status='Approved'
  }
  onReject(dept){
    dept.status='rejected'
  }
}

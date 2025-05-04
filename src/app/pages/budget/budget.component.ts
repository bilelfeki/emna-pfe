import { Component, OnInit } from "@angular/core";
import { log } from "console";

@Component({
  selector: "app-budget",
  templateUrl: "./budget.component.html",
  styleUrls: ["./budget.component.scss"],
})
export class BudgetComponent implements OnInit {
  isFinancier = localStorage.getItem("role")=="financier";
  isManager = localStorage.getItem("role")=="manager";
  constructor() {}

  ngOnInit() {}
 budgets = [
    {
      status: 'Approved',
      name: "Digital Marketing Strategy - Q1",
      nameDep: "Marketing",
      region: "North",
      allocatedBudget: 50000,
      spent: 46000,
      remaining: 4000,
    },
    {
      status: 'Approved',
      name: "Digital Campaign Optimization",
      nameDep: "Marketing",
      region: "North",
      allocatedBudget: 50000,
      spent: 46000,
      remaining: 4000,
    },
    {
      status: 'Approved',
      name: "SEO Enhancement Project",
      nameDep: "Marketing",
      region: "North",
      allocatedBudget: 50000,
      spent: 46000,
      remaining: 4000,
    },
    {
      status: 'Approved',
      name: "Content Outreach Plan",
      nameDep: "Marketing",
      region: "North",
      allocatedBudget: 50000,
      spent: 46000,
      remaining: 4000,
    },
    {
      status: 'Approved',
      name: "UX & Feature Innovation",
      nameDep: "Research & Development",
      region: "Central",
      allocatedBudget: 120000,
      spent: 105000,
      remaining: 15000,
    },
    {
      status: 'Approved',
      name: "User Behavior Research",
      nameDep: "Research & Development",
      region: "Central",
      allocatedBudget: 120000,
      spent: 105000,
      remaining: 15000,
    },
    {
      status: 'Approved',
      name: "Prototype Enhancement Initiative",
      nameDep: "Research & Development",
      region: "Central",
      allocatedBudget: 120000,
      spent: 105000,
      remaining: 15000,
    },
    {
      status: 'Approved',
      name: "Logistics & Process Integration",
      nameDep: "Operations",
      region: "South",
      allocatedBudget: 80000,
      spent: 60000,
      remaining: 20000,
    },
    {
      status: 'Approved',
      name: "Warehouse Automation Setup",
      nameDep: "Operations",
      region: "South",
      allocatedBudget: 80000,
      spent: 60000,
      remaining: 20000,
    },
    {
      status: 'Approved',
      name: "Fleet Route Optimization",
      nameDep: "Operations",
      region: "South",
      allocatedBudget: 80000,
      spent: 60000,
      remaining: 20000,
    },
    {
      status: 'Approved',
      name: "Supply Chain Coordination",
      nameDep: "Operations",
      region: "South",
      allocatedBudget: 80000,
      spent: 60000,
      remaining: 20000,
    },
    {
      status: 'Approved',
      name: "Regional Distribution Upgrade",
      nameDep: "Operations",
      region: "South",
      allocatedBudget: 80000,
      spent: 60000,
      remaining: 20000,
    },
    {
      status: 'rejected',
      name: "Infrastructure & Security Upgrade",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
    {
      status: 'rejected',
      name: "Firewall Reinforcement Project",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
    {
      status: 'rejected',
      name: "Cloud Migration Assessment",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
    {
      status: 'rejected',
      name: "Server Capacity Expansion",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
    {
      status: 'rejected',
      name: "Data Compliance Initiative",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
    {
      status: 'pending',
      name: "Network Vulnerability Audit",
      nameDep: "IT",
      region: "West",
      allocatedBudget: 100000,
      spent: 82000,
      remaining: 18000,
    },
  ];

  onApprove(dept){
    dept.status='Approved'
  }
  onReject(dept){
    dept.status='rejected'
  }
}

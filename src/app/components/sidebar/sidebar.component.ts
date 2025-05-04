import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  condition:boolean;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
    condition:true
  },
  {
    path: "/user-profile",
    title: "User profile",
    icon: "ni-single-02 text-yellow",
    class: "",
    condition:true
  },
  {
    path: "/tables",
    title: "Departements",
    icon: "ni-bullet-list-67 text-red",
    class: "",
    condition:localStorage.getItem("role")=="manager" ? true :false
  },
  {
    path: "/budget",
    title: "Budget Management",
    icon: "ni-money-coins text-success",
    class: "",
    condition:true
  },
  {
    path: "/register",
    title: "Log Out",
    icon: "ni-circle-08 text-pink",
    class: "",
    condition:true
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}

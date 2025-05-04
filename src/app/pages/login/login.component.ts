import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { log } from "console";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  email = "";
  password = "";
  verified = false;
  shouldappear = false;
  verifyLoginCredentials() {
    let userList = JSON.parse(localStorage.getItem("user-list")) as any[];
    let userindex = userList.findIndex(
      (elem) => elem.email == this.email.trim()
    );
    let isUserInList = userindex != -1;
    if (isUserInList) {
      localStorage.setItem("name", userList[userindex]["name"]);
      localStorage.setItem("email", userList[userindex]["email"]);
      localStorage.setItem("password", userList[userindex]["password"]);
      localStorage.setItem("addresse", userList[userindex]["address"]);
      localStorage.setItem("role", userList[userindex]["role"]);
      this.router.navigate(["user-profile"]);
    } else {
      this.shouldappear = true;
    }
  }
  constructor(private router: Router) {}

  ngOnInit() {}
  ngOnDestroy() {}
}

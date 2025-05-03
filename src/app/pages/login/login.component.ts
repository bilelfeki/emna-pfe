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
    if (
      this.email.trim() === localStorage.getItem("email").trim() &&
      this.password.trim() === localStorage.getItem("password").trim()
    ) {
      this.router.navigate(["user-profile"])
    } else {
      this.shouldappear = true;
    }
  }
  constructor(private router : Router) {}

  ngOnInit() {}
  ngOnDestroy() {}
}

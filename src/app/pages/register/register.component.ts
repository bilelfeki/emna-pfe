import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  name = "";
  email = "";
  password = "";
  isSuccessEnabled = false;
  addresse = "";
  phoneNumber = "";
  dateEmbauche = "";
  cin = "";
  onCreateAccout() {
    localStorage.setItem("name", this.name);
    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("phoneNumber", this.phoneNumber);
    localStorage.setItem("dateEmbauche", this.dateEmbauche);
    localStorage.setItem("cin", this.cin);
    localStorage.setItem("cin", this.cin);
    this.isSuccessEnabled = true;
    setTimeout(() => {
      this.route.navigate(["login"]);
    }, 2000);
  }
  constructor(private route: Router) {}
  ngOnInit() {}
  get couldSubmit() {
    return (
      this.email.trim() != "" &&
      this.name.trim() != "" &&
      this.password.trim() != ""
    );
  }
}

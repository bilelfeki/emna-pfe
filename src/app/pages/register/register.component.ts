import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { log } from "console";

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
  role = "";
  wrongCredentials: boolean;
  onCreateAccout() {
    localStorage.setItem("name", this.name);
    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("phoneNumber", this.phoneNumber);
    localStorage.setItem("dateEmbauche", this.dateEmbauche);
    localStorage.setItem("cin", this.cin);
    localStorage.setItem("role", this.role);
    localStorage.setItem("addresse", this.addresse);
    let userList = JSON.parse(localStorage.getItem("user-list")) as any[];
    if (!userList) {
      localStorage.setItem(
        "user-list",
        JSON.stringify([
          {
            name: this.name,
            email: this.email,
            role: this.role,
            phoneNumber: this.phoneNumber,
            cin: this.cin,
            address: this.addresse,
            password:this.password
          },
        ])
      );
    } else {
      if(userList.findIndex(elem=>elem.email==this.email.trim())!=-1){
        this.wrongCredentials =true
        return;
      }
      userList.push({
        name: this.name,
        email: this.email,
        role: this.role,
        phoneNumber: this.phoneNumber,
        cin: this.cin,
        address: this.addresse,
        password:this.password
      });
      localStorage.setItem("user-list", JSON.stringify(userList));
    }
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

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.getItem("name")) {
      localStorage.setItem("name", "emna");
      localStorage.setItem("email", "emna@gmail.com");
      localStorage.setItem("password", "123");
      localStorage.setItem("phoneNumber", "21033558");
      localStorage.setItem("dateEmbauche", "");
      localStorage.setItem("cin", "1233");
      localStorage.setItem("role", "manager");
      localStorage.setItem("addresse", "tunis");
    }
  }
  title = "argon-dashboard-angular";
}

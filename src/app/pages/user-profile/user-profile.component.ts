import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
name=localStorage.getItem("name")
addresse=localStorage.getItem("addresse");
email=localStorage.getItem("email");
role=localStorage.getItem("role");

  constructor() { }

  ngOnInit() {
  }

}

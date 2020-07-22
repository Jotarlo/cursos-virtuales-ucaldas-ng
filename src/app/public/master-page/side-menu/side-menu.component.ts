import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLogged: Boolean = false;
  role: number = 0;

  subscription: Subscription;

  constructor(private service: SecurityService) { }

  ngOnInit(): void {
    this.subscription = this.service.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
      this.role = data.role;
      console.log("ROle: " + this.role);
      console.log("Data: ");
      console.log(data);
    });
  }

}

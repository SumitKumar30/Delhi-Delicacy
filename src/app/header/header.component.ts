import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
=======
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD
  // user: firebase.User;
  collapsed: boolean = true;
  constructor(public auth: AuthService) {

  }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
  }

}

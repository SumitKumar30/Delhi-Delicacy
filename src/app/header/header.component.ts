import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // user: firebase.User;
  collapsed: boolean = true;
  constructor(public auth: AuthService) {

  }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }

}

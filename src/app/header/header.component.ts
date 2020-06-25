import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { AppUser } from '../shared/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // user: firebase.User;
  collapsed: boolean = true;
  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }

}

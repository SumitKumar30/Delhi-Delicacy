import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    // this.auth.user$.pipe(
    //   map(user => {
    //     return this.userService.get(user.uid);
    // })).subscribe(x => console.log());
    // Changes
    // return this.auth.user$.pipe(switchMap(user => this.userService.get(user.uid).valueChanges()
    // )).pipe(map(appUser => appUser.isAdmin));
    //  Futher Changes
    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin));
  }

}

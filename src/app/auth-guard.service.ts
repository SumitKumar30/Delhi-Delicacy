import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    // return this.auth.user$.map(user => {
    //   if(user) return true;
    //   this.router.navigate(['/login']);
    //   return false;
    // });
    return this.auth.user$.pipe(map(user => {
      if (user) return true;
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }));
  }
}

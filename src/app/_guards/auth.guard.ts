import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private authsService: AuthService, private router: Router, private alertify: AlertifyService){}
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authsService.loggedIn()){
      return true;
    }
    this.alertify.error('You need to be logged in to access this area');
    this.router.navigate(['/home']);
    return false;
  }
}

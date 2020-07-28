import { Injectable } from '@angular/core';
import {AnnoncerDataService} from '../data/annoncer-data.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataGuardService implements CanActivate{

  constructor(private service: AnnoncerDataService, private router: Router, private auth: AuthenticationService) { }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.service.getUserAnnouncer().subscribe(
      success => {
        if(Object.keys(success).length !== 0) sessionStorage.setItem('registered', this.auth.getAuthenticatedUser());
        else {
          sessionStorage.removeItem('registered');
          location.reload();
        }
      }
    );
    if(sessionStorage.getItem('registered') === this.auth.getAuthenticatedUser()) return true;
    this.router.navigate(['wizard']);
    return false;
  }
}

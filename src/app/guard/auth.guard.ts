import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderService } from '../shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private loaderService: LoaderService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handleRequest();


    // this.router.createUrlTree(['/login']);
  }
  async handleRequest(): Promise<boolean | UrlTree> {
    this.loaderService.setLoader(true);
    let user = await this.authService.getUserPromise();
    this.loaderService.setLoader(false);
    if (!user) {
      return this.router.createUrlTree(['/login']);
    } else {
      return true;
    }
  }

}

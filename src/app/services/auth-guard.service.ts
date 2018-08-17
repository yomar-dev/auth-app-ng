import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private _auth: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._auth.isAuthenticated()) {
            console.log('Puede ingresar');
            return true;
        } else {
            console.error('No puede ingresar, bloqueado por el Guard');
            return false;
        }
    }
}

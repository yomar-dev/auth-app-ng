// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'xN0YtGWlZLmufiJQwDoWiJ0DJb8rSpXR',
        domain: 'yomar-dev.auth0.com',
        responseType: 'token id_token',
        audience: 'https://yomar-dev.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid'
    });

    constructor(public router: Router) { }

    public login(): void {
        this.auth0.authorize();
    }
}

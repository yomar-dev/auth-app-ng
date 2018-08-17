import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-protegida',
    templateUrl: './protegida.component.html',
    styles: []
})
export class ProtegidaComponent implements OnInit {
    profile: any;

    constructor(private _auth: AuthService) { }

    ngOnInit() {
        if (this._auth.userProfile) {
            this.profile = this._auth.userProfile;
            console.log(this.profile);
        } else {
            this._auth.getProfile((err, profile) => {
                this.profile = profile;
                console.log(this.profile);
            });
        }
    }


}

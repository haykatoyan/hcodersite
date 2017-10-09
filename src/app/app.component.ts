import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    currentUserName: string;
    isLoggedIn: boolean;
    showEnterDetails: boolean;

    constructor(private http: Http, private router: Router) {
    }

    ngOnInit() {
        if (sessionStorage.getItem("name") === null) {
            this.currentUserName = "HCoder";
            this.isLoggedIn = false;
        } else {
            this.currentUserName = "Hi " + sessionStorage.getItem("name");
            this.isLoggedIn = true;
        }
        this.showEnterDetails = false;

        $("#helloHeading").click(function () {
            window.location.href = "/";
        })
    }

    public logIn(email: string, password: string): void {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (email && password) {
            this.http.post('/signMeIn', JSON.stringify({email: email, password: password}), {headers: headers})
                .map((res) => res.json()).subscribe((res: any) => {
                if (res.length > 0) {
                    sessionStorage.setItem("name", res[0].fullName);
                    this.currentUserName = "Hi " + res[0].fullName;
                    this.isLoggedIn = true;
                } else {
                    $(".wrongUsernamePass").fadeIn("slow");
                    setTimeout(function () {
                        $(".wrongUsernamePass").fadeOut("slow");
                    }, 2500);
                }

            });
        }
        else {
            $(".enterUsernamePass").fadeIn("slow");
            setTimeout(function () {
                $(".enterUsernamePass").fadeOut("slow");
            }, 2500);
        }
    }

    public logOut(): void {
        sessionStorage.clear();
        this.currentUserName = "HCoder";
        this.isLoggedIn = false;
    }

    public hello(param: string): void {
        $('mainUL a').each(function(item) {
            $(item).attr("id")
        });
    }

}

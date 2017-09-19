import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
@Injectable()
export class SignUpComponentComponent implements OnInit {
	
	private username : Item;
	private fullName : Item;
	private email : Item;
	private pass1 : Item;
	private pass2 : Item;

	constructor(private http: Http, private router: Router) { }

    ngOnInit() {
    	this.username = new Item();
    	this.fullName = new Item();
    	this.email = new Item();
    	this.pass1 = new Item();
    	this.pass2 = new Item();
    }

    public usernameValidate(username) {
    	if(username.length < 3) {
    		this.username.iconError = true;
    		this.username.iconDemand = this.username.iconOk = false;
    	} else {
    		if(!isNaN(parseInt(username.charAt(0)))) {
    			this.username.iconError = true;
    			this.username.iconDemand = this.username.iconOk = false;
    		} else {
    			if(this.isValid(username)) {
    				this.username.iconOk = true;
    				this.username.iconDemand = this.username.iconError = false;
    			} else {
    				this.username.iconError = true;
    				this.username.iconDemand = this.username.iconOk = false;
    			}
    		}
    	}

    	this.username.value = username;
    	//console.log(this.username.value);
    }

    public fullNameValidate(fullName) {
    	if(fullName.length < 3) {
    		this.fullName.iconError = true;
    		this.fullName.iconDemand = this.fullName.iconOk = false;
    	} else {
    		if(!isNaN(parseInt(fullName.charAt(0)))) {
    			this.fullName.iconError = true;
    			this.fullName.iconDemand = this.fullName.iconOk = false;
    		} else {
    			if(this.isValid(fullName)) {
    				this.fullName.iconOk = true;
    				this.fullName.iconDemand = this.fullName.iconError = false;
    			} else {
    				this.fullName.iconError = true;
    				this.fullName.iconDemand = this.fullName.iconOk = false;
    			}
    		}
    	}


    	this.fullName.value = fullName;
    	//console.log(this.fullName.value);
    }

    public emailValidate(email) {

        if(this.validateEmail(email)) {
            this.email.iconOk = true;
            this.email.iconDemand = this.email.iconError = false;
        } else {
            this.email.iconError = true;
            this.email.iconDemand = this.email.iconOk = false;
        }

    	this.email.value = email;
    	//console.log(this.email.value);
    }

    public pass1Validate(pass1) {
    	
    	if(pass1.length < 3) {
    		this.pass1.iconError = true;
    		this.pass1.iconDemand = this.pass1.iconOk = false;
    	} else {
    		if(!isNaN(parseInt(pass1.charAt(0)))) {
    			this.pass1.iconError = true;
    			this.pass1.iconDemand = this.pass1.iconOk = false;
    		} else {
    			if(this.isValid(pass1)) {
    				this.pass1.iconOk = true;
    				this.pass1.iconDemand = this.pass1.iconError = false;
    			} else {
    				this.pass1.iconError = true;
    				this.pass1.iconDemand = this.pass1.iconOk = false;
    			}
    		}
    	}

    	this.pass1.value = pass1;	
    	//console.log(pass1);
    }

    public pass2Validate(pass2) {

    	if(pass2.length < 3) {
    		this.pass2.iconError = true;
    		this.pass2.iconDemand = this.pass2.iconOk = false;
    	} else {
    		if(!isNaN(parseInt(pass2.charAt(0)))) {
    			this.pass2.iconError = true;
    			this.pass2.iconDemand = this.pass2.iconOk = false;
    		} else {
    			if(this.isValid(pass2)) {
                    if(pass2 == this.pass1.value) {
                        this.pass2.iconOk = true;
                        this.pass2.iconDemand = this.pass2.iconError = false;
                    } else {
                        this.pass2.iconError = true;
                        this.pass2.iconDemand = this.pass2.iconOk = false;
                    }
    			} else {
    				this.pass2.iconError = true;
    				this.pass2.iconDemand = this.pass2.iconOk = false;
    			}
    		}
    	}

    	this.pass2.value = pass2;  	
    	//console.log(pass2);
    }

    public signUp() {

        if(this.email.iconOk && this.username.iconOk && this.fullName.iconOk 
            && this.pass1.iconOk && this.pass2.iconOk) {
             let headers = new Headers();
             headers.append('Content-Type', 'application/json');
             //let data = ;
             
             this.http.post('/signMeUp', JSON.stringify({username: this.username.value, fullName: this.fullName.value, email: this.email.value, pass: this.pass1.value}),
             {headers: headers}).map((res) => res.json()).subscribe((res: any) => { 
                 if(res.response == "Ok") {
                     sessionStorage.setItem("name", res.fullName);
                     
                     $(".successfullSignUp").fadeIn("slow");
                     
                     setTimeout(function() { $(".successfullSignUp").fadeOut("slow", function() {
                         window.location.href = "/";
                     }); }, 2500);

                 }});
        } else {
            $(".fillAllRows").fadeIn("slow");
            setTimeout(function() { $(".fillAllRows").fadeOut("slow"); }, 2500);
        }
       
    }

    private isValid(str) {
    	return /^\w+$/.test(str);
    }

    private validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

class Item {
	public value : string;
	public iconDemand : boolean;
	public iconOk: boolean;
	public iconError: boolean;

	constructor() {
		this.value = "";
		this.iconDemand = true;
		this.iconError = false;
		this.iconOk = false;
	}
}

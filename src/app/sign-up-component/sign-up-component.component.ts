import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {
	
	private username : Item;
	private fullName : Item;
	private email : Item;
	private pass1 : Item;
	private pass2 : Item;

	constructor() { }

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
    	console.log(this.username.value);
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
    	console.log(this.fullName.value);
    }

    public emailValidate(email) {
    	this.email.value = email;	
    	console.log(this.email.value);
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
    	console.log(pass1);
    }

    public pass2Validate(pass2) {

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

    	this.pass2.value = pass2;	    	
    	console.log(pass2);
    }

    public onBlurMethod() {
    	alert("Hello");
    }

    private isValid(str) {
    	return /^\w+$/.test(str);
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

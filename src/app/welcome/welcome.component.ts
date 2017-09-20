import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	public defaultCode : string = "function average(a, b) { return (a + b) / 2; }";
    constructor() {}

    ngOnInit() {

    }

}

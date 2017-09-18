import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-successfull-sign-up',
  templateUrl: './successfull-sign-up.component.html',
  styleUrls: ['./successfull-sign-up.component.css']
})
export class SuccessfullSignUpComponent implements OnInit {
  private name : string;
  constructor(private activatedRoute: ActivatedRoute) { this.name = "";}

  ngOnInit() {
  		this.name = sessionStorage.getItem("name");
  }

}

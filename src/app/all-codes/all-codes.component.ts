import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material';
import { EditorComponent } from '../editor/editor.component';
import { DialogService } from "ng2-bootstrap-modal";

import 'rxjs/add/operator/map';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-all-codes',
    templateUrl: './all-codes.component.html',
    styleUrls: ['./all-codes.component.css']
})
@Injectable()
export class AllCodesComponent implements OnInit {

    public codes: any;

    constructor(private http: Http, private router: Router, private dialogService: DialogService) {
    }

    ngOnInit() {
        const headers = new Headers();

        this.http.post('/getAllCodes', {}, {headers: headers}).map((res) => res.json()).subscribe((res: any) => {
            this.codes = res;
        });
    }

    openEditor() : void {
        let disposable = this.dialogService.addDialog(EditorComponent, {
                title:'Code editor', 
        });
    } 

}

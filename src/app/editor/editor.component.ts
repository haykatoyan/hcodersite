import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { HostListener } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

export interface EditorTitle {
	title: string;
}

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent extends DialogComponent<EditorTitle, boolean> implements OnInit, EditorTitle {
	  title: string;
    sourceCode: string;
    resultCode: string;
    dynamicCompiling: boolean;
  	
    constructor(dialogService: DialogService) { 
    	super(dialogService);
      this.dynamicCompiling = false;
    }

    ngOnInit() {
    	$(".lined").linedtextarea();

        $( ".modal-dialog" ).animate({
          top: "+=50",
        }, 
          'fast', function() {
        });
    }

    cancel() : void {
    	this.result = false;
   		this.close();
    }

    runExecuteCode() {
        if(this.dynamicCompiling)
          this.executeCode();
    }

    executeCode(): void {
        this.resultCode = "";

        try {
            this.resultCode = eval(this.sourceCode);
        } catch (e) {
            if (e instanceof SyntaxError) {
                this.resultCode = e.message;
            }
            this.resultCode = e.message;
        }
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
    	if (event.keyCode == 27) { 
    		this.close();
    	}	
    }

}

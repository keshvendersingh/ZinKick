import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Helpers } from '../../../../helpers';
import { RouterLink } from '@angular/router';

@Component({
    selector: ".app-csv",
    templateUrl: "./csv.component.html",
    styles: [],
})
export class CsvComponent implements OnInit {
    form: FormGroup;

    constructor( ) {

    }
    ngOnInit() {
      
    }

}
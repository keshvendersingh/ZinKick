import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { UserService } from "../../../../auth/_services/user.service";

declare let Dropzone: any;
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {

    rows = [];
    constructor(private _script: ScriptLoaderService,
    private _userService: UserService
    ) {

    }
    ngOnInit() {
        this._userService.getList()
        .subscribe(
        data => {
            if(data && data.lists){
                this.rows = data.lists;
            }
        },
        error => {

        });
    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/app/js/dashboard.js');

        Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    }


}
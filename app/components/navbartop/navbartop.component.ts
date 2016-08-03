import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'navbar-top',
    templateUrl: 'navbartop.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class NavBarTopComponent { }

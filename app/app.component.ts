import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Route, Router } from "@angular/router";

import { NavBarTopComponent } from "./components/navbartop/navbartop.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES , NavBarTopComponent ],
    templateUrl: 'app.component.html'
})


export class AppComponent {

  constructor(private _router: Router){

  }
 }

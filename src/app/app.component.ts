import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <nav [ngClass]="{header:true}">
      <ul>
        <li><a routerLink="">Main</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
                 `,
    styleUrls: ['./css/main.component.css']
})
export class AppComponent {}

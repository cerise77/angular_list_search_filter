import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';

import { List }   from './list.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpService }   from './http.service';

import { SearchPipe} from './filter.pipe';
import { FilterPipe} from './filter.pipepN';
import { FiltrationPipe} from './filtration.pipe';


const appRoutes: Routes =[
    { path: '', component: List},
    { path: '**', component: NotFoundComponent }
];

//

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [
                    AppComponent, NotFoundComponent,
                    List, FilterPipe, SearchPipe, FiltrationPipe
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

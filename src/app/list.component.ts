import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, HostListener, Directive} from '@angular/core';
import { HttpService } from './http.service';
import { EventManager } from '@angular/platform-browser';
import {Table} from './table';


@Component({
    selector: 'company-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})

export class List implements OnInit{


  tables: Table[]=[];
  searchText: string;

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef){}


  ngOnInit(){

      this.httpService.getData().subscribe(data => this.tables=data);
  }


  nameClick(increased:any, sortKey:any){
    const data = this.tables;

    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
  }


  premiereClick(increased:any, sortKey:any){
    const data = this.tables;

    data.sort((a,b) => new Date(a[sortKey]).getTime() - new Date(b[sortKey]).getTime());
  }


}

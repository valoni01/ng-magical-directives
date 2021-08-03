import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss']
})
export class NavViewComponent implements OnInit {

  @Input() title!:string;

  constructor() { }

  ngOnInit(): void {
  }

}




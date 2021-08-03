import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  @ViewChild('cardView') cardView!: TemplateRef<HTMLElement>;
  @ViewChild('tableView') tableView!: TemplateRef<HTMLElement>;

  // activeTemplate!: TemplateRef<HTMLElement>



  booklist = [
    {name:'Eze goes to school', author:'some persons', year:'1975'},
    {name:'Uvie and the Angel', author:'some body', year:'1407'},
    {name:'Things Fall Apart', author:'everybody',year:'1947'},
    {name:'Mr. Salami', author:'nobody',year:'2021'},
  ]

  @HostListener('window:resize', ['$event'])
    onResize(event:any) {
    const maxWidth = event.target.innerWidth;
    if(maxWidth <= 850){
      // this.activeTemplate = this.cardTemplate
    }
  }


  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {

  @Input() booksTemplate!:TemplateRef<HTMLElement>
  @Input() booklist = [
    {name:'The young shall grow', author:'some persons', year:'1975'},
    {name:'Without a silver spoon', author:'some body', year:'1407'},
    {name:'Lara the sugar gurl', author:'everybody',year:'1947'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

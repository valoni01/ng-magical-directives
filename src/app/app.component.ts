import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'magical-directives';

  @ViewChild('books') books!: TemplateRef<HTMLElement>
  @ViewChild('modal') modal!: TemplateRef<HTMLElement>

  activePage!:TemplateRef<HTMLElement>;
  navOptions = ['Books', 'Modal'];

  setValue(val:string){
     this.activePage = val == 'Books' ? this.books : this.modal
  }

  ngAfterViewInit(){

  }


}

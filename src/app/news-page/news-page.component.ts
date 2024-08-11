import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
  @Input('title') titleVar = ""
  @Input('detail') detailVar = ""
  @Input('commentAry') commmentAryVar:string[] = []
  @Output() SelectMe = new EventEmitter();

  selectMefun(){
    this.SelectMe.emit(this.titleVar)
  }
}


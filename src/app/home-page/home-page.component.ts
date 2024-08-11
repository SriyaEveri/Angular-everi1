// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './home-page.component.html',
//   styleUrl: './home-page.component.css'
// })
// export class HomePageComponent {

// }

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NamSvcService } from '../nam-svc.service';
import { NamDtvDirective } from '../nam-dtv.directive';
 

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent, FormsModule,NamDtvDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  commentIptVar=""
  commentAryVar:any ={}

  selectedNews = ""
  
  addCommentFnc(commentVav:NgModel)
  {
    // this.commentAryVar.push(this.commentIptVar)
    // commentVav.reset()
    if(this.commentAryVar[this.selectedNews])
      this.commentAryVar[this.selectedNews].push(this.commentIptVar)
    else
      this.commentAryVar[this.selectedNews] = [this.commentIptVar]
    commentVav.reset()
  }
  
  selectMefun(EvtRsgVar:string)
  {
    this.selectedNews = EvtRsgVar
  }

  constructor(public NavVap: Router,
		public UrlVap: ActivatedRoute,public namService:NamSvcService) { }

  GotoPageFnc()
  {
    this.NavVap.navigate(["user/Navya/mobile/87654345"], 
    { 
      replaceUrl: true,
      state: { OTPVak: 2345 }
    });

  }

  // LoginFnc(){
  //      this.namService.isLoggin=true
  //      this.namService.userName="Sriya kanaparthi"
  //      this.NavVap.navigate(["/about"])
  // }
 

}

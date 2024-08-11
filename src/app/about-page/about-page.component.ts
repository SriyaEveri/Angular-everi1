import { Component } from '@angular/core';
import { NamSvcService } from '../nam-svc.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  constructor(public namService: NamSvcService,public NavVap: Router){
          
  }
//   LogoutFnc(){
//     this.namService.userName=""
//     this.namService.isLogout = false
//     this.NavVap.navigate(["/"])
// }
}

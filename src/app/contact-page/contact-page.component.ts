import { Component } from '@angular/core';
import { NamSvcService } from '../nam-svc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
        constructor(public namService: NamSvcService,public NavVap: Router){


        }
      //   LogoutFnc(){
      //     this.namService.isLogout = false
      //     this.NavVap.navigate(["/"])
      // }
        
}

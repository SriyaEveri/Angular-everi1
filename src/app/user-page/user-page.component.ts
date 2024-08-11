import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  NamVar:string =""
  mobile:string=""
  OTPVar: any = 0
 

  constructor(public LocVap:Location,
    public UrlVap: ActivatedRoute) { 
      let state:any = LocVap.getState()
      this.OTPVar = state.OTP
    }

  ngOnInit()
  {
    let params = this.UrlVap.snapshot.params
    this.NamVar =params .NamVak;
    this.mobile =params .mobile;
    this.OTPVar =params .OTP;

   
  }

  
}

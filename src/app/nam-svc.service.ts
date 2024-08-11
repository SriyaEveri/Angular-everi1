import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NamSvcService {

  isLoggin = false
  isLogout= false
  userName =""

  constructor(public NavVap:Router) { }

  onInit(){
    let data = localStorage.getItem("login") 
    if(data) {
      this.isLoggin =+ data > 0

    }
  }
  loginFnc(){
    this.isLoggin = true
    this.userName ="sriya"
    localStorage.setItem("login",this.isLoggin+"")
    this.NavVap.navigate(["/about"])
  }
  LogoutFnc(){
    this.isLoggin = false
    this.userName =""
    localStorage.setItem("login","")
    this.NavVap.navigate(["/"])
  }
}

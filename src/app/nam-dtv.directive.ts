import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[chg-clr]',
  standalone: true
})
export class NamDtvDirective {
  NamElement!:HTMLElement
 
  constructor(private psgElement:ElementRef) {
    this.NamElement=psgElement.nativeElement
  }
  ngonInit(){
    this.NamElement.innerHTML="This is from Directive"
    this.NamElement.style.color="green"
    this.NamElement.style.background="cyan"
  }
}

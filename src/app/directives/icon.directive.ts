import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnInit
{

  @Input("iconname") iconname:string="";

  constructor(private elementRef:ElementRef,private renderer2:Renderer2) { 
   
  }


  ngOnInit(): void {

    this.renderer2.setAttribute(this.elementRef.nativeElement,"class","fa fa-"+this.iconname);  // <i appIcon class="fa fa-map-marker">
  }

}

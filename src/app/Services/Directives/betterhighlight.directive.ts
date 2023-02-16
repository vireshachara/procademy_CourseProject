import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private elememt : ElementRef, private renderer:Renderer2) { }

  //Custom Directives by using @HostBinding
  
  @HostBinding('style.backgroundColor') background : string = 'transparent';
  @HostBinding('style.border') border : string = 'none';


  @HostListener('mouseenter') mouseenter(){
    this.background = 'green';
    this.border = "red 2px solid"
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = 'transparent';
    this.border = "none"
  }

}

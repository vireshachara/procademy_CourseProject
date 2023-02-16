import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustompropertybinding]'
})
export class CustompropertybindingDirective implements OnInit{

  constructor(private elememt : ElementRef, private renderer:Renderer2) { }

  //Custom Directives by using Custom proprty binding

  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'pink';
  @Input() title : string = 'This is title';

  
  @HostBinding('style.backgroundColor') background : string = this.defaultColor;
  @HostBinding('style.border') border : string = 'none';


  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor;
    this.border = "red 2px solid"
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = this.defaultColor;
    this.border = "none"
  }

}
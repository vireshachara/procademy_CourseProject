import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private element: ElementRef) {
    this.element = element;
  }

  //Custom Directives
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}

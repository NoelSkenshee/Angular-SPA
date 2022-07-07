import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveEl]',
})
export class ActiveElDirective {
  constructor(private render: Renderer2, private el: ElementRef) {


  }



  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.el.nativeElement, 'animation_');
    setTimeout(() => {
    this.render.removeClass(this.el.nativeElement, 'animation_');
    }, 5000);
  }

}

import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[scrollReveal]'
})

export class ScrollDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'transition', '700ms all');
        this.renderer.addClass(this.el.nativeElement, 'scroll-hide');
        this.renderer.removeClass(this.el.nativeElement, 'scroll-show');
    }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (event: Event): void => {
        /* if (this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight < 0) {
            this.renderer.addClass(this.el.nativeElement, 'scroll-hide');
            this.renderer.removeClass(this.el.nativeElement, 'scroll-show');
        } */

        /*
        console.log("scroll",
            window.outerHeight,
            event.srcElement.scrollTop,
            this.el.nativeElement.offsetTop,
            this.el.nativeElement.offsetHeight
        );*/

        if (window.outerHeight + event.srcElement.scrollTop > this.el.nativeElement.offsetTop + (this.el.nativeElement.offsetHeight / 2.5)) {
        //if ( (window.outerHeight + event.srcElement.scrollTop) > (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight) ) {
            this.renderer.addClass(this.el.nativeElement, 'scroll-show');
            this.renderer.removeClass(this.el.nativeElement, 'scroll-hide');
        } else if (window.outerHeight + event.srcElement.scrollTop < this.el.nativeElement.offsetTop) {
            this.renderer.addClass(this.el.nativeElement, 'scroll-hide');
            this.renderer.removeClass(this.el.nativeElement, 'scroll-show');
        }
    };
}
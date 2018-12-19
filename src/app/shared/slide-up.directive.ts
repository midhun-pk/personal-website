import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appSlideUp]'
})
export class SlideUpDirective {
    @HostBinding('class.slide-up') elementSlideUp = false;
    @HostBinding('class.fade-in') elementFadeIn = false;

    constructor(private elementRef: ElementRef) { }

    @HostListener('window:scroll', ['$event']) onScroll() {
        const elementRectangle = (<HTMLElement>this.elementRef.nativeElement).getBoundingClientRect();
        const viewPortHeight = (<Window>window).innerHeight;

        if (elementRectangle.top + 100 < viewPortHeight) {
            this.elementSlideUp = true;
            this.elementFadeIn = true;
        }
    }
}

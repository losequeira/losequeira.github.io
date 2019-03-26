import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'content-box',
  templateUrl: './content-box.component.html',
  styleUrls: [],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class ContentBoxComponent {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('document:scroll', ['$event'])
  onWindowScroll(event: Event) {
      console.log("Scrolling");
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      console.log("scroll:", scrollPosition);
      console.log("component:", componentPosition);

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}
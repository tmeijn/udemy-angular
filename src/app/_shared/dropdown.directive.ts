import { Directive, HostBinding, HostListener, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownDirective implements OnInit {
  private isOpen = false;

  // __NEEDED TO BIND TO DIRECTIVE IMMEDIATELY__
  // tslint:disable-next-line:no-input-rename
  @Input('appDropdownToggle') className;

  constructor(private renderer2: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    // Defaults
    this.className = 'open';
  }

  @HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer2.addClass(this.elRef.nativeElement, this.className);
    } else {
      this.renderer2.removeClass(this.elRef.nativeElement, this.className);
    }

  }

}

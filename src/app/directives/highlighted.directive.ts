import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {
    console.log('Directive created');
   }

   @HostBinding('class.highlighted')
   get cssClasses(){
     return this.isHighlighted;
   }

   @HostBinding('attr.disabled')
   get disabled(){
     return "true";
   }

   @HostListener('mouseover', ['$event'])
   mouseOver($event){
     console.log('$event',$event);
     this.isHighlighted = true;
     this.toggleHighlight.emit(this.isHighlighted)
     
   }
   @HostListener('mouseleave')
   mouseLeave(){
     this.isHighlighted = false;
     this.toggleHighlight.emit(this.isHighlighted)
   }

   @Output()
   toggleHighlight = new EventEmitter();

   toggle(){
     this.isHighlighted = !this.isHighlighted;
     this.toggleHighlight.emit(this.isHighlighted);
   }

}

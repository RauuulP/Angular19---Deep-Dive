import { Directive, HostBinding, HostListener, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Directive({
  selector: "[highlighted]",
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();
  

  constructor() {
    console.log("Directive created ...");
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event){
    console.log($event)
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  MouseLeave(){
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);

  }


}

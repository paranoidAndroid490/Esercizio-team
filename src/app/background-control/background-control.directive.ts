import { Directive, ElementRef, HostBinding, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundControl]'
})
export class BackgroundControlDirective {


  @Input() stato:string


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if(this.stato === 'Active'){
      this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-success mt-3 mb-3 col-12 card')
    } else if(this.stato === 'Inactive'){
      this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-danger mt-3 mb-3 col-12 card')
    } else {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-info mt-3 mb-3 col-12 card')
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['stato']){
      if(this.stato === 'Active'){
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-success mt-3 mb-3 col-12 card')
      } else if(this.stato === 'Inactive'){
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-danger mt-3 mb-3 col-12 card')
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'bg-info mt-3 mb-3 col-12 card')
      }
    }
  }





}

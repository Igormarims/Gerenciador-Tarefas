import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[inputDateComPlaceholder]'
})
export class InputDateComPlacDirective {
  
  private element: ElementRef;
 
  constructor( element: ElementRef) {
      this.element = element
   }
  
   @HostListener('focus')
   onFocus(){
    if(this.element.nativeElement.type === 'text'){
      this.element.nativeElement.type = 'date';
    }
   }
   @HostListener('blur') 
    onBlur(){
      if(!this.element.nativeElement.value){
        this.element.nativeElement.type = 'text';
      }
    }


}

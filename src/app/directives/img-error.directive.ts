import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[imgError]'
})
export class ImgErrorDirective {

  @Input() imgError!: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.imgError || 'https://via.placeholder.com/200';
  }
}

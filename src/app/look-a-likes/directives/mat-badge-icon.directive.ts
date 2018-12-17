import { Directive, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appMatBadgeIcon]'
})
export class MatBadgeIconDirective implements OnInit {

  @Input() matBadgeIcon: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const badge = this.el.nativeElement.querySelector('.mat-badge-content');
    badge.style.display = 'flex';
    badge.style.alignItems = 'center';
    badge.style.justifyContent = 'center';
    badge.innerHTML = `<i class="material-icons" style="font-size: 20px">${this.matBadgeIcon}</i>`;
  }

}

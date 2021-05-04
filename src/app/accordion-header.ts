import { NumberFormatStyle } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ngbd-accordion-header",
  templateUrl: "./accordion-header.html",
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .card.disabled {
        opacity: 0.5;
      }
    `
  ]
})
export class NgbdAccordionHeader {

  enabled: boolean[] = [false, false, false];

  toggle(index: number): void {

    console.log(index);

    let state = this.enabled[index];

    this.enabled = [false, false, false];
    this.enabled[index]= !state;
    
  }
}

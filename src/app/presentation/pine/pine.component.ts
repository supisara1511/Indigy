import { Component } from '@angular/core';

@Component({
  selector: 'app-pine',
  templateUrl: './pine.component.html',
  styleUrls: ['./pine.component.scss'],
})
export class PineComponent {
  public count: number = 9;
  public arrays: string = '';
  constructor() {
    this.arrays = this.handleCountChange();
  }

  handleCountChange() {
    let lines = '';
    for (let row = 1; row <= this.count; row++) {
      const spaces = ' '.repeat(this.count - row);
      const numbers = Array(row).fill(row).join('-');
      lines += `${spaces}${numbers}${spaces}\n`;
    }
    return lines;
  }
}

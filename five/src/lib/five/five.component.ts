import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourComponent } from '@angularstorybook/four';

@Component({
  selector: 'angularstorybook-five',
  standalone: true,
  imports: [CommonModule, FourComponent],
  templateUrl: './five.component.html',
  styleUrl: './five.component.css',
})
export class FiveComponent {}

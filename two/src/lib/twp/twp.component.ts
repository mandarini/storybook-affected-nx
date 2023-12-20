import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from '@angularstorybook/one';

@Component({
  selector: 'angularstorybook-twp',
  standalone: true,
  imports: [CommonModule, OneComponent],
  templateUrl: './twp.component.html',
  styleUrl: './twp.component.css',
})
export class TwpComponent {}

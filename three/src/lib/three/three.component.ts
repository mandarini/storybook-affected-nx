import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from '@angularstorybook/one';

@Component({
  selector: 'angularstorybook-three',
  standalone: true,
  imports: [CommonModule, OneComponent],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css',
})
export class ThreeComponent {}

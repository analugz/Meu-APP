import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //necessário para usar ngIf

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule], //importa CommonModule para usar ngIf
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  status: string = 'sucesso';
}

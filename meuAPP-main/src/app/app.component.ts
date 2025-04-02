  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { FirstComponentComponent } from './components/first-component/first-component.component';
  import { CommonModule } from '@angular/common'; //faz com que o ngIf funcione

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FirstComponentComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'meu-app1';
    status: string = 'sucesso!'; //precisa adicionar para que o string funcione no html
  }

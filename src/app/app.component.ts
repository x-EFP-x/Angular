import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  welcome = 'Hola!';
  tasks = [
    'instalar angular cli',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio'
  ]
}

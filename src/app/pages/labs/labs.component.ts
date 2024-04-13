import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  welcome = 'Hola!';

  tasks = signal([
    'instalar angular cli',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio'
  ]);

  name = signal('Felipe');
  age = 20;
  disabled = true;
  porsche = 'https://hips.hearstapps.com/hmg-prod/images/wappen-neu1-6478f9c59e707.jpg?crop=0.539xw:0.958xh;0.194xw,0&resize=640:*';

  person = {
    name: this.name,
    age: this.age,
    dream: this.porsche
  }

  clickHandler(){
    alert('Hola');
  }

  inputHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}

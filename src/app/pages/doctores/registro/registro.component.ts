import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class DoctoresRegistroComponent {
  @Input() selectedOption = 'Elige tu especialidad';

  constructor() {}

  updateSelectedOption(option: string) {
    this.selectedOption = option;
  }

  registrarse() {
    console.log(this.selectedOption);
  }

  options = [
    'Cardiologista',
    'Dermatologista',
    'Endocrinologista',
    'Gastroenterologista',
    'Ginecologista',
    'Infectologista',
    'Neurologista',
    'Oftalmologista',
    'Ortopedista',
  ];
}

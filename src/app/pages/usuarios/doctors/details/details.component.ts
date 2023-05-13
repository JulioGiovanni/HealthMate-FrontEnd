import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  doctor: Doctor;
  environment = environment;
  direcciones: any = [];
  motivos: any = [];

  constructor(private route: ActivatedRoute) {
    this.doctor = this.route.snapshot.data['data'];
    this.direcciones = [
      {
        id: 1,
        direccion: this.doctor.direccion,
      },
    ];
    this.motivos = [
      {
        id: 1,
        motivo: 'Consulta',
      },
      {
        id: 2,
        motivo: 'Revisión',
      },
      {
        id: 3,
        motivo: 'Operación',
      },
    ];
    console.log(this.doctor);
  }

  ngOnInit() {}
}

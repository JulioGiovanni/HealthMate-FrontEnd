import { Component } from '@angular/core';
import { Cita } from 'src/app/shared/interfaces/cita.interface';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
})
export class CitasComponent {
  citas: Cita[] = [];
  environment = environment;

  constructor(private generaService: GeneralService) {
    this.generaService.getCitas().subscribe((citas: any) => {
      this.citas = citas;
    });
  }
}

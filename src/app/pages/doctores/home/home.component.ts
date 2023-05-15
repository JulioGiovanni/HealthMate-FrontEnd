import { Component } from '@angular/core';
import { GeneralService } from '../../../shared/services/general/general.service';
import { Cita } from 'src/app/shared/interfaces/cita.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class DoctoresHomeComponent {
  citas: Cita[] = [];
  environment = environment;
  constructor(private generalService: GeneralService) {
    this.generalService.getCitasDoctor().subscribe((response: any) => {
      console.log(response);
      this.citas = response;
    });
  }
}

import { Component } from '@angular/core';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';
import { GeneralService } from 'src/app/shared/services/general/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  options: Doctor[] = [];
  especialistas = 0;
  constructor(private generalService: GeneralService) {}
  async ngOnInit() {
    this.generalService.allCategories().subscribe((response: any) => {
      this.options = response;
      this.especialistas = this.options.length;
    });
  }
}

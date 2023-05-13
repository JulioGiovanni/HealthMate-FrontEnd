import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/interfaces/doctor.interface';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctoresComponent {
  doctores: Doctor[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.doctores = this.route.snapshot.data['data'];
  }
}

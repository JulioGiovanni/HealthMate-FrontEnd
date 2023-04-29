import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  days: String[] = this.getThreeDays();
  horas: String[] = ['10:00', '11:00', '12:00', '13:00', '14:00'];
  getDayOfTheWeek() {
    const daysOfTheWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'];
    const today = new Date();
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(afterTomorrow.getDate() + 2);
    return daysOfTheWeek[afterTomorrow.getDay()];
  }

  getThreeDays() {
    let today: any = new Date();
    let tomorrow: any = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let dayAfterTomorrow: any = new Date(tomorrow);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
    today = today.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
    });
    tomorrow = tomorrow.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
    });
    dayAfterTomorrow = dayAfterTomorrow.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'short',
    });

    const days = [today, tomorrow, dayAfterTomorrow];

    return days;
  }
}

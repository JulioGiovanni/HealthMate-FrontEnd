import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  activeTabIndex: number = 1; // El índice de la pestaña activa por defecto

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}

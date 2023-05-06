import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-select-especialidad',
  templateUrl: './select-especialidad.component.html',
  styleUrls: ['./select-especialidad.component.scss'],
})
export class SelectEspecialidadComponent {
  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('dropdownToggle') dropdownToggle: ElementRef;
  @Input() options: string[];
  @Input() selectedOption: string = '';
  @Output() updatedOption = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {
    this.dropdownToggle = new ElementRef(null);
    this.dropdown = new ElementRef(null);
    this.options = [];
  }

  toggleDropdown() {
    if (this.dropdownToggle.nativeElement.classList.contains('dropdown-open')) {
      this.closeDropdown();
    } else {
      this.renderer.addClass(
        this.dropdownToggle.nativeElement,
        'dropdown-open'
      );
    }
  }

  closeDropdown() {
    this.renderer.removeClass(
      this.dropdownToggle.nativeElement,
      'dropdown-open'
    );
  }

  selectOption(event: MouseEvent, option: string) {
    this.selectedOption = option;
    this.updatedOption.emit(option);
    this.closeDropdown();
    event.stopPropagation(); // Evita que el evento se propague a través del DOM
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.dropdownToggle.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}

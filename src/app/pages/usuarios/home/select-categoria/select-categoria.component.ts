import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'select-categoria',
  templateUrl: './select-categoria.component.html',
  styleUrls: ['./select-categoria.component.scss'],
})
export class SelectCategoriaComponent {
  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('dropdownToggle') dropdownToggle: ElementRef;
  @Input() options: any[];
  selectedOption: any = {};

  ngOnInit() {}
  constructor(private renderer: Renderer2) {
    this.dropdownToggle = new ElementRef(null);
    this.dropdown = new ElementRef(null);
    this.options = [];
    this.selectedOption.nombre = 'Selecciona una opción';
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

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-new-profile-carousel',
  templateUrl: './new-profile-carousel.component.html',
  styleUrls: ['./new-profile-carousel.component.scss'],
})
export class NewProfileCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef;
  @Input() cards: any[] = [];
  currentPage: number = 0;
  pages: number[] = [];
  pageSize: number = 3;

  breakpoints = {
    small: '(max-width: 640px)',
    medium: '(min-width: 641px) and (max-width: 1023px)',
    large: '(min-width: 1024px)',
  };

  constructor(private breakpointObserver: BreakpointObserver) {
    this.carousel = new ElementRef(null);
  }
  ngOnInit(): void {
    this.pages = Array(Math.ceil(this.cards.length / this.pageSize))
      .fill(0)
      .map((_, i) => i);
    this.breakpointObserver
      .observe(Object.values(this.breakpoints))
      .subscribe(() => {
        this.setPageSize();
      });
  }

  setPageSize() {
    if (this.breakpointObserver.isMatched(this.breakpoints.small)) {
      this.pageSize = 1;
    } else if (this.breakpointObserver.isMatched(this.breakpoints.medium)) {
      this.pageSize = 2;
    } else {
      this.pageSize = 3;
    }
    this.updatePages();
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      const carouselEl = this.carousel.nativeElement;
      carouselEl.style.scrollBehavior = 'smooth';
      carouselEl.scrollLeft += carouselEl.offsetWidth;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      const carouselEl = this.carousel.nativeElement;
      carouselEl.style.scrollBehavior = 'smooth';
      carouselEl.scrollLeft -= carouselEl.offsetWidth;
    }
  }

  getCardsForPage(page: number) {
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    return this.cards.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.pageSize);
  }

  updatePages() {
    this.pages = Array(Math.ceil(this.cards.length / this.pageSize))
      .fill(0)
      .map((_, i) => i);
  }
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      const carouselEl = this.carousel.nativeElement;
      carouselEl.style.scrollBehavior = 'smooth';
      carouselEl.scrollLeft = carouselEl.offsetWidth * page;
    }
  }
}

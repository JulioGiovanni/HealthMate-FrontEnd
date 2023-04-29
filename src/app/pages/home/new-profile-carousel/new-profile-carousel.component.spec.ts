import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileCarouselComponent } from './new-profile-carousel.component';

describe('NewProfileCarouselComponent', () => {
  let component: NewProfileCarouselComponent;
  let fixture: ComponentFixture<NewProfileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProfileCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProfileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

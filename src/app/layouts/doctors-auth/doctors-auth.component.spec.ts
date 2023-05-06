import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAuthComponent } from './doctors-auth.component';

describe('DoctorsAuthComponent', () => {
  let component: DoctorsAuthComponent;
  let fixture: ComponentFixture<DoctorsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

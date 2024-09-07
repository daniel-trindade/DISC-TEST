import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteadnessComponent } from './steadness.component';

describe('SteadnessComponent', () => {
  let component: SteadnessComponent;
  let fixture: ComponentFixture<SteadnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteadnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteadnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

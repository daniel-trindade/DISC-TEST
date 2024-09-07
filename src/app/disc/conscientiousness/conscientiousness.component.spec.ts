import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConscientiousnessComponent } from './conscientiousness.component';

describe('ConscientiousnessComponent', () => {
  let component: ConscientiousnessComponent;
  let fixture: ComponentFixture<ConscientiousnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConscientiousnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConscientiousnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

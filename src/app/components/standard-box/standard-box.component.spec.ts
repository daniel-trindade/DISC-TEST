import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBoxComponent } from './standard-box.component';

describe('StandardBoxComponent', () => {
  let component: StandardBoxComponent;
  let fixture: ComponentFixture<StandardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

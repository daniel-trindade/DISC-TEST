import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingTestComponent } from './starting-test.component';

describe('StartingTestComponent', () => {
  let component: StartingTestComponent;
  let fixture: ComponentFixture<StartingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartingTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

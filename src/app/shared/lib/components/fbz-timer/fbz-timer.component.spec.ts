import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbzTimerComponent } from './fbz-timer.component';

describe('FbzTimerComponent', () => {
  let component: FbzTimerComponent;
  let fixture: ComponentFixture<FbzTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbzTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbzTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

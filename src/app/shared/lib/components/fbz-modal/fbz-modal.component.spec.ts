import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbzModalComponent } from './fbz-modal.component';

describe('FbzModalComponent', () => {
  let component: FbzModalComponent;
  let fixture: ComponentFixture<FbzModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbzModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbzModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbzFormItensComponent } from './fbz-form-itens.component';

describe('FbzFormItensComponent', () => {
  let component: FbzFormItensComponent;
  let fixture: ComponentFixture<FbzFormItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbzFormItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbzFormItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

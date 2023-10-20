import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbzTabelaComponent } from './fbz-tabela.component';

describe('FbzTabelaComponent', () => {
  let component: FbzTabelaComponent;
  let fixture: ComponentFixture<FbzTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbzTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbzTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

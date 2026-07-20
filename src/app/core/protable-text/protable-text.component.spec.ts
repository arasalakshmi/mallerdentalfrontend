import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtableTextComponent } from './protable-text.component';

describe('ProtableTextComponent', () => {
  let component: ProtableTextComponent;
  let fixture: ComponentFixture<ProtableTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtableTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

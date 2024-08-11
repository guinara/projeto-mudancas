import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisComponentComponent } from './saiba-mais-component.component';

describe('SaibaMaisComponentComponent', () => {
  let component: SaibaMaisComponentComponent;
  let fixture: ComponentFixture<SaibaMaisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaibaMaisComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaibaMaisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

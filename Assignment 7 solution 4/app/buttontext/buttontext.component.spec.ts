import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontextComponent } from './buttontext.component';

describe('ButtontextComponent', () => {
  let component: ButtontextComponent;
  let fixture: ComponentFixture<ButtontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtontextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

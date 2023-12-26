import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristCompComponent } from './frist-comp.component';

describe('FristCompComponent', () => {
  let component: FristCompComponent;
  let fixture: ComponentFixture<FristCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FristCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FristCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

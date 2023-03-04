import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpostComponent } from './lastpost.component';

describe('LastpostComponent', () => {
  let component: LastpostComponent;
  let fixture: ComponentFixture<LastpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

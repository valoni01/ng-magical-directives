import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavViewComponent } from './nav-view.component';

describe('NavViewComponent', () => {
  let component: NavViewComponent;
  let fixture: ComponentFixture<NavViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

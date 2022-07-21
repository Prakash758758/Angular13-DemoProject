import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectiveComponent } from './ng-directive.component';

describe('NgDirectiveComponent', () => {
  let component: NgDirectiveComponent;
  let fixture: ComponentFixture<NgDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentBComponent } from './ng-content-b.component';

describe('NgContentBComponent', () => {
  let component: NgContentBComponent;
  let fixture: ComponentFixture<NgContentBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentBComponent]
    });
    fixture = TestBed.createComponent(NgContentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

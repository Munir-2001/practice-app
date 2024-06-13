import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderpagePage } from './loaderpage.page';

describe('LoaderpagePage', () => {
  let component: LoaderpagePage;
  let fixture: ComponentFixture<LoaderpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

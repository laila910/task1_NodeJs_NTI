import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproviderComponent } from './singleprovider.component';

describe('SingleproviderComponent', () => {
  let component: SingleproviderComponent;
  let fixture: ComponentFixture<SingleproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

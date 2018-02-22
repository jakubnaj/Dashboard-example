import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebuilderItemComponent } from './homebuilder-item.component';

describe('HomebuilderItemComponent', () => {
  let component: HomebuilderItemComponent;
  let fixture: ComponentFixture<HomebuilderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebuilderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebuilderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

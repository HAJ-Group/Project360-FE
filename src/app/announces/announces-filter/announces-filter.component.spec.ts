import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesFilterComponent } from './announces-filter.component';

describe('AnnouncesFilterComponent', () => {
  let component: AnnouncesFilterComponent;
  let fixture: ComponentFixture<AnnouncesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

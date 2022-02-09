import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDefaultSearchComponent } from './dog-default-search.component';

describe('DogDefaultSearchComponent', () => {
  let component: DogDefaultSearchComponent;
  let fixture: ComponentFixture<DogDefaultSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDefaultSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDefaultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

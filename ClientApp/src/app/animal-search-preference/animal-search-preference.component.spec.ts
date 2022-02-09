import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSearchPreferenceComponent } from './animal-search-preference.component';

describe('AnimalSearchPreferenceComponent', () => {
  let component: AnimalSearchPreferenceComponent;
  let fixture: ComponentFixture<AnimalSearchPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSearchPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

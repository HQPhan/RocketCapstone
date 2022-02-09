import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAnimalPageComponent } from './individual-animal-page.component';

describe('IndividualAnimalPageComponent', () => {
  let component: IndividualAnimalPageComponent;
  let fixture: ComponentFixture<IndividualAnimalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAnimalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

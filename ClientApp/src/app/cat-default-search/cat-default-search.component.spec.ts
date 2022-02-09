import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDefaultSearchComponent } from './cat-default-search.component';

describe('CatDefaultSearchComponent', () => {
  let component: CatDefaultSearchComponent;
  let fixture: ComponentFixture<CatDefaultSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDefaultSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDefaultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomizedSearchComponent } from './user-customized-search.component';

describe('UserCustomizedSearchComponent', () => {
  let component: UserCustomizedSearchComponent;
  let fixture: ComponentFixture<UserCustomizedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCustomizedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCustomizedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

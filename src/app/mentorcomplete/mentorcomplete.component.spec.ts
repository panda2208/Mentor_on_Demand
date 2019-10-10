import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcompleteComponent } from './mentorcomplete.component';

describe('MentorcompleteComponent', () => {
  let component: MentorcompleteComponent;
  let fixture: ComponentFixture<MentorcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

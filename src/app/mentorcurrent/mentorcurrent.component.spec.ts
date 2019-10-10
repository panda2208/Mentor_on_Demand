import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcurrentComponent } from './mentorcurrent.component';

describe('MentormainComponent', () => {
  let component: MentorcurrentComponent;
  let fixture: ComponentFixture<MentorcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

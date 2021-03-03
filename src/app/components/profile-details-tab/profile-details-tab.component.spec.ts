import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsTabComponent } from './profile-details-tab.component';

describe('ProfileDetailsTabComponent', () => {
  let component: ProfileDetailsTabComponent;
  let fixture: ComponentFixture<ProfileDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

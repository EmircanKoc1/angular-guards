import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyinformationComponent } from './profile-myinformation.component';

describe('ProfileMyinformationComponent', () => {
  let component: ProfileMyinformationComponent;
  let fixture: ComponentFixture<ProfileMyinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMyinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMyinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

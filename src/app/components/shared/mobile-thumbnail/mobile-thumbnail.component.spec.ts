import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileThumbnailComponent } from './mobile-thumbnail.component';

describe('MobileThumbnailComponent', () => {
  let component: MobileThumbnailComponent;
  let fixture: ComponentFixture<MobileThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

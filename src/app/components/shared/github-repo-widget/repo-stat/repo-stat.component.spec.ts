import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoStatComponent } from './repo-stat.component';

describe('RepoStatComponent', () => {
  let component: RepoStatComponent;
  let fixture: ComponentFixture<RepoStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

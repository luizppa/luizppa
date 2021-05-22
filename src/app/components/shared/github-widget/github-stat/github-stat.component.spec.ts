import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStatComponent } from './github-stat.component';

describe('GithubStatComponent', () => {
  let component: GithubStatComponent;
  let fixture: ComponentFixture<GithubStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

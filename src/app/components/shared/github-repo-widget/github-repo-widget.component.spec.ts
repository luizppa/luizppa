import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoWidgetComponent } from './github-repo-widget.component';

describe('GithubRepoWidgetComponent', () => {
  let component: GithubRepoWidgetComponent;
  let fixture: ComponentFixture<GithubRepoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

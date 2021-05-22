import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubWidgetComponent } from './github-widget.component';

describe('GithubWidgetComponent', () => {
  let component: GithubWidgetComponent;
  let fixture: ComponentFixture<GithubWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

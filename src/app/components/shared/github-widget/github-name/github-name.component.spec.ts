import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNameComponent } from './github-name.component';

describe('GithubNameComponent', () => {
  let component: GithubNameComponent;
  let fixture: ComponentFixture<GithubNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

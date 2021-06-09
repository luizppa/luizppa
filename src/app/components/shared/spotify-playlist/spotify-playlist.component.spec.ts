import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPlaylistComponent } from './spotify-playlist.component';

describe('SpotifyPlaylistComponent', () => {
  let component: SpotifyPlaylistComponent;
  let fixture: ComponentFixture<SpotifyPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

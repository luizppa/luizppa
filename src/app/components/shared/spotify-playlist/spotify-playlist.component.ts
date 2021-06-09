import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-spotify-playlist',
  templateUrl: './spotify-playlist.component.html',
  styleUrls: ['./spotify-playlist.component.css']
})
export class SpotifyPlaylistComponent implements OnInit {
  @Input()
  public playlist_url: string = '';

  constructor(public i18n: I18nService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  
  public url(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.playlist_url);
  }

}

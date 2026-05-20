import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="App">
      <app-header></app-header>
      <router-outlet />
      @if (!is404) {
        <app-footer></app-footer>
      }
    </div>
  `
})
export class App implements OnInit, OnDestroy {
  is404 = false;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    public lang: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((e: NavigationEnd) => {
      this.is404 = e.urlAfterRedirects === '/404';
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = `
        (function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
          m[i].l = 1 * new Date();
          for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
          k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(97663315, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        });
      `;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.src = 'https://mc.yandex.ru/watch/97663315';
      img.style.position = 'absolute';
      img.style.left = '-9999px';
      img.alt = '';
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

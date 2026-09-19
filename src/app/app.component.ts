import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { CartComponent } from './cart/cart.component';
import { ClaimsComponent } from './claims/claims.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ToastComponent } from './toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    PromoBannerComponent,
    CartComponent,
    ClaimsComponent,
    LightboxComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vintage-party_web';
}

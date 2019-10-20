import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapNgxModule } from './bootstrap-ngx.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

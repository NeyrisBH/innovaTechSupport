import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioSoftwareComponent } from './tipoServicios/servicio-software/servicio-software.component';
import { ServicioHardwareComponent } from './tipoServicios/servicio-hardware/servicio-hardware.component';
import { ServicioTelecomunicacionesComponent } from './tipoServicios/servicio-telecomunicaciones/servicio-telecomunicaciones.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicioSoftwareComponent,
    ServicioHardwareComponent,
    ServicioTelecomunicacionesComponent,
    HomeComponent,
    NosotrosComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'page-not-found', component: PageNotFoundComponent},
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

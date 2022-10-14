import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioSoftwareComponent } from './tipoServicios/servicio-software/servicio-software.component';
import { ServicioHardwareComponent } from './tipoServicios/servicio-hardware/servicio-hardware.component';
import { ServicioTelecomunicacionesComponent } from './tipoServicios/servicio-telecomunicaciones/servicio-telecomunicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicioSoftwareComponent,
    ServicioHardwareComponent,
    ServicioTelecomunicacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

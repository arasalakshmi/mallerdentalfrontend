import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeRoutingModule } from './module/home/home-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbotRoutingModule } from './module/about/about-routing.module';
import { ReviewRoutingModule } from './module/reviews/reviews-routing.module';
import { treatmentModule } from './module/treatments/treatments.module';
//import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroment';
import { SiteContentService } from './services/sitecontent.service';
import { HeaderFooterService } from './core/headerFooterService';
//import { AppointmentRoutingModule } from './module/appointment/appointment.routing-module';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeRoutingModule,
    AbotRoutingModule,
    ReviewRoutingModule,
    treatmentModule,
   // AngularFireModule.initializeApp(enviroment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
   // AppointmentRoutingModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    SiteContentService,
    HeaderFooterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

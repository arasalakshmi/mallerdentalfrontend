import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeRoutingModule } from './module/home/home-routing.module';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbotRoutingModule } from './module/about/about-routing.module';
import { ReviewRoutingModule } from './module/reviews/reviews-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroment';
import { SiteContentService } from './services/sitecontent.service';
import { HeaderFooterService } from './core/headerFooterService';
//import { AppointmentRoutingModule } from './module/appointment/appointment.routing-module';
import { MaterialModule } from './material.module';
//import { BlogModule } from './module/blog/blog.module';
import { treatmentRoutingModule } from './module/treatments/treatment-routing.module';
import { BlogRoutingModule } from './module/blog/blog-routing.module';
@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeRoutingModule,
        AbotRoutingModule,
        ReviewRoutingModule,
        treatmentRoutingModule,
        BlogRoutingModule,
        
        // AngularFireModule.initializeApp(enviroment.firebase),
       // AngularFirestoreModule,
        //AngularFireStorageModule,
        // AppointmentRoutingModule,
        MaterialModule ], providers: [
        provideClientHydration(),
        //provideAnimationsAsync(),
        SiteContentService,
        HeaderFooterService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }

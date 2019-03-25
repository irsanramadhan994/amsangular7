import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material'
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavbarComponent } from './layout/sidenavbar/sidenavbar.component';
import { SuratmasukComponent , DialogOverviewExampleDialog} from './suratmasuk/suratmasuk.component';


@NgModule({
	
	 entryComponents: [SuratmasukComponent, DialogOverviewExampleDialog],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavbarComponent,
    SuratmasukComponent,
	DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
     MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent,SuratmasukComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

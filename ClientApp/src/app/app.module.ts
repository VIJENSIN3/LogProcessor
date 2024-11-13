// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogComponent } from './components/log/log.component';
import { LogService } from '../services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent // Ensure LogComponent is correctly listed in declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

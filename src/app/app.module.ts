import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
  MatRadioModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogForMoreDitailsComponent } from './components/dialog-for-more-ditails/dialog-for-more-ditails.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HomeComponent,
    DialogForMoreDitailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule

  ],
  entryComponents: [DialogForMoreDitailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

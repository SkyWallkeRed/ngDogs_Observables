import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsService } from './dogs.service';
import { AppRoutingModule } from './/app-routing.module';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { FilterPipe } from './filter.pipe';
import { AddWalkComponent } from './add-walk/add-walk.component';
import { FilterComponent } from './filter/filter.component';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddDogComponent,
    AddOwnerComponent,
    DogsComponent,
    EditDogComponent,
    FilterPipe,
    AddWalkComponent,
    FilterComponent,
    ScoreComponent
    ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

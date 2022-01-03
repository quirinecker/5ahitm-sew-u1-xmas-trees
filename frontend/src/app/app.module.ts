import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { TypeSelectionComponent } from './tree/type-selection/type-selection.component';
import {MatSelectModule} from "@angular/material/select";
import { TreeListComponent } from './tree/tree-list/tree-list.component';
import { TreeDisplayComponent } from './tree/tree-display/tree-display.component';
import { SaleComponent } from './tree/sale/sale.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { SaleFormComponent } from './tree/sale-form/sale-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { PaypallFakeComponent } from './tree/paypall-fake/paypall-fake.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,
    TypeSelectionComponent,
    TreeListComponent,
    TreeDisplayComponent,
    SaleComponent,
    SaleFormComponent,
    PaypallFakeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

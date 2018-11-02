import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AmexioTextField } from './component/textfiled/textfield.component';
import { AmexioInputHelperComponent } from './component/base/input.helper.component';
import { ReactiveFormsModule } from "@angular/forms";
import { GridComponent } from './component/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './component/pipe/filter.pipe';
import { FilterAndSortPipe } from './component/pipe/filterandsort.pipe';
import { TextDemo } from './demo/textdemo';
import { CDDemoComponent } from './changedetection/cd.component';
import { DropDownComponent } from './component/dropdown/dropdown.component';
import { AmexioTypeAheadComponent } from './component/typeahead/typeahead.component';
import { DropDownListComponent } from './component/base/dropdownlist.component';



@NgModule({
  declarations: [
    AppComponent,
    
    AmexioTextField,AmexioInputHelperComponent,GridComponent,DropDownComponent,DropDownListComponent, AmexioTypeAheadComponent,
    
    FilterAndSortPipe, FilterPipe,

    TextDemo, CDDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

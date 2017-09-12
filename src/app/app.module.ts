import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FooterComponent } from './footer/footer.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    FooterComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

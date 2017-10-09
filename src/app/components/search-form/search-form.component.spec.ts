import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFormComponent } from './search-form.component';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { UniquePipe } from '../../pipes/unique.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { FormDataService } from '../../services/form-data/form-data.service';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let getCafesService, filterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, NgbModule.forRoot(), HttpModule, AngularFontAwesomeModule ],
      providers: [ GetCafesService, FilterService, FormDataService ],
      declarations: [
        SearchFormComponent,
        DatepickerComponent,
        UniquePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    getCafesService = fixture.debugElement.injector.get(GetCafesService);
    filterService = fixture.debugElement.injector.get(FilterService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('checkSelectedDate method should be checked with the future date', async() => {
    component.checkSelectedDate({year: 2037, month: 11, day: 14});
    fixture.detectChanges();
    expect(component.model).toEqual({year: 2037, month: 11, day: 14});
    expect(component.userQuery.date).toEqual('2037-11-14');
    expect(component.dayHours).toEqual(component.showLeftHours('future'));
  });

  it('checkSelectedDate method should be checked with the current date', async() => {
    const now = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
    component.checkSelectedDate(now);
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
    fixture.detectChanges();
    expect(component.userQuery.date).toEqual(localISOTime);
  });

  it('showLeftHours method should show correct left hours', async() => {
    const hoursNow = new Date().getHours();
    let res;
    if (hoursNow >= 23) {
      res = undefined;
    } else if ( hoursNow < 10) {
      res = 10;
    } else {
      res = hoursNow + 1;
    }
    component.showLeftHours();
    fixture.detectChanges();
    expect(component.dayHours.sort()[0]).toEqual(res);
   });

});

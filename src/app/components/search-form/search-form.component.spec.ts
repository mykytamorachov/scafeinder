import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFormComponent } from './search-form.component';
import { DatepickerComponent } from '../bootstrap/datepicker/datepicker.component';
import { UniquePipe } from '../../pipes/unique.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';
import { FilterService } from '../../services/filter.service';
import { HttpModule } from '@angular/http';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let getCafesService, filterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, NgbModule.forRoot(), HttpModule ],
      providers: [ GetCafesService, FilterService ],
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
    fixture.detectChanges();

    expect(component.userQuery.date).toEqual(new Date().toISOString().slice(0, 10));
  });

});

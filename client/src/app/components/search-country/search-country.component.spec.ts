import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCountryComponent } from './search-country.component';
import { CountryService } from 'src/app/services/country.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';

describe('SearchCountryComponent', () => {
  let component: SearchCountryComponent;
  let fixture: ComponentFixture<SearchCountryComponent>;

  beforeEach(() => {
    const formGroup = new FormGroup({
      text: new FormControl('', Validators.minLength(3)),
    });

    const countryService = jasmine.createSpyObj('CountryService', [
      'getAll',
      'getFilteredCountries',
    ]);

    TestBed.configureTestingModule({
      declarations: [SearchCountryComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: CountryService, useValue: countryService },
        { provide: FormGroup, useValue: formGroup },
      ],
    });
    fixture = TestBed.createComponent(SearchCountryComponent);
    component = fixture.componentInstance;
    countryService.getAll.and.returnValue(of([{}]));
    fixture.detectChanges();
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

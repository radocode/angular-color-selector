import { Type } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { ColorsService } from './colors.service';

describe('ColorsService', () => {
  let colorsService: ColorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [ColorsService],
    });

    colorsService = TestBed.inject(ColorsService);
    httpMock = TestBed.inject(
      HttpTestingController as Type<HttpTestingController>
    );
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAllColors', () => {
    it('should return all colors', () => {
      // Act
      const allColorsSubscription = colorsService.getAllColors();

      // Assert
      allColorsSubscription.subscribe((colors: string) => {
        expect(colors).toBeTruthy();
      });
      httpMock.expectOne({}).flush([{},{}]);
    });

    it('should return a string in case of error', () => {
      // Act
      const colorSubscription = colorsService.getColors({
        page: null
      });

      // Assert
      colorSubscription.subscribe((quote: string) => {
        expect(typeof quote).toEqual('string');
        expect(quote).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error',
      });
    });
  });
});

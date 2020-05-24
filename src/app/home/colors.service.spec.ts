import { Type } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { ColorsService } from './colors.service';

describe('QuoteService', () => {
  let quoteService: ColorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [ColorsService],
    });

    quoteService = TestBed.inject(ColorsService);
    httpMock = TestBed.inject(
      HttpTestingController as Type<HttpTestingController>
    );
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getRandomQuote', () => {
    it('should return a random Chuck Norris quote', () => {
      // Arrange
      const mockQuote = { value: 'a random quote' };

      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({
        category: 'toto',
      });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(quote).toEqual(mockQuote.value);
      });
      httpMock.expectOne({}).flush(mockQuote);
    });

    it('should return a string in case of error', () => {
      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({
        category: 'toto',
      });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
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

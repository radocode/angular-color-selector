import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  colors: (c: ColorsRequest) => `/colors?page=${c.page}`,
  allColors: () => `/colors`,
};

export interface ColorsRequest {
  page: number;
}

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  isLoading = false;
  constructor(private httpClient: HttpClient) {}
  getColors(page: ColorsRequest) {
    return this.httpClient.get(routes.colors(page)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load colors'))
    );
  }

  getAllColors() {
    return this.httpClient.get(routes.allColors()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load colors'))
    );
  }
}

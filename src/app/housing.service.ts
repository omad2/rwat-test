import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private housingData = [
    { id: 1, name: 'House 1', location: 'City A', price: '$200,000' },
    { id: 2, name: 'House 2', location: 'City B', price: '$250,000' },
    { id: 3, name: 'House 3', location: 'City C', price: '$300,000' }
  ];

  getData(): Observable<any[]> {
    return of(this.housingData);
  }
}

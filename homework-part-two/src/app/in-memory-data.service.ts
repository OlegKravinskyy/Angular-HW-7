import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const exercises = [
      { id: 1, name: 'Push-ups', reps: 20 },
      { id: 2, name: 'Squats', reps: 30 },
      { id: 3, name: 'Pull-ups', reps: 10 },
    ];
    return { exercises };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs';
import e from 'express';

export interface Exercise {
  id?: number;
  name: string;
  reps: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private apiUrl = 'api/exercises';
  constructor(private http: HttpClient) {}

  getExercises() {
    return this.http.get<Exercise[]>(this.apiUrl);
  }

  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.apiUrl, exercise, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateExercise(exercise: Exercise): Observable<Exercise> {
    const url = `${this.apiUrl}/${exercise.id}`;
    return this.http.put<Exercise>(url, exercise, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteExercise(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({ 'Conteny-Type': 'applicaton/json' }),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ExerciseService, Exercise } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private exersiceService: ExerciseService) {}

  ngOnInit(): void {
    this.getExersices();
  }

  getExersices(): void {
    this.exersiceService.getExercises().subscribe((data) => {
      console.log('Exersices:', data);
      this.exercises = data || [];
    });
  }

  addExercise(): void {
    const newExersice = { id: undefined, name: 'New exercise', reps: 15 };
    this.exersiceService.addExercise(newExersice).subscribe((exercise) => {
      this.exercises.push(exercise);
    });
  }

  updateExercise(exercise: Exercise | null): void {
    if (!exercise) {
      console.error('Cannot update: exercise is null');
      return;
    }
    console.log(`Updating exercise:`, exercise);
    exercise.reps += 5;
    this.exersiceService
      .updateExercise(exercise)
      .subscribe((updatedExercise) => {
        console.log(`Updated exercise id=${updatedExercise.id}`);
      });
  }

  deleteExercise(id: number | undefined): void {
    if (id === undefined) {
      console.error('Cannot delete exercise: id is undefined');
      return;
    }

    this.exersiceService.deleteExercise(id).subscribe(() => {
      this.exercises = this.exercises.filter((ex) => ex.id !== id);
    });
  }
}

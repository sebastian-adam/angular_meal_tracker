import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthfulPipe} from './healthful.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [HealthfulPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class="meal-container">
    <h1>Cheat Meal Tracker</h1>
    <div>
      <h3>Sort by healthful choices</h3>
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="healthful">Meals less than 500 calories</option>
        <option value="not-healthful">Meals more than 500 calories</option>
        <option value="all" selected="selected">All Meals</option>
      </select>
    </div>
  </div>
  <div class="meal-container">
    <meal-display class="meal" *ngFor="#currentMeal of mealList | healthful:filterHealthfulChoices"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  </div>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event.name, $event.description, $event.calories, $event.sodium, $event.sugar)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public filterHealthfulChoices: string = "healthful";
  constructor() {
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
  createMeal(name: string,  description: string,  calories: number,  sodium: number, sugar: number): void {
    this.mealList.push(
      new Meal(name, description, calories, sodium, sugar, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthfulChoices = filterOption;
    console.log(this.filterHealthfulChoices);
  }
}

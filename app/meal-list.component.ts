import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { HealthfulPipe } from './healthful.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [HealthfulPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <div class="header-container">
    <h1 id="title">CHEAT MEAL TRACKER</h1>
    <div>
      <h3>Sort by healthful choices</h3>
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all" selected="selected">All Meals</option>
        <option value="healthful">Meals less than 500 calories</option>
        <option value="not-healthful">Meals more than 500 calories</option>
      </select>
      <hr>
    </div>
  </div>
  <div class="inputs-container">
    <new-meal class="input-item" (onSubmitNewMeal)="createMeal($event.name, $event.description, $event.image, $event.calories, $event.sodium, $event.sugar)"></new-meal>
    <edit-meal-details class="input-item" *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  </div>
  <div class="meal-container">
    <meal-display class="meal meal-item" *ngFor="#currentMeal of mealList | healthful:filterHealthful"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  </div>
  <div class="sticky-bar"></div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public filterHealthful: string = "not-healthful";
  constructor() {
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
  createMeal(name: string, description: string, image: string, calories: number, sodium: number, sugar: number): void {
    this.mealList.push(
      new Meal(name, description, image, calories, sodium, sugar, this.mealList.length)
    );
    console.log(this.mealList);
    this.filterHealthful = "all";
  }
  onChange(filterOption) {
    this.filterHealthful = filterOption;
    console.log(this.filterHealthful);
  }
}

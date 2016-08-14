import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
    <div class="meal-form-edit">
      <h3>Edit Meal: </h3>
      <input [(ngModel)]="meal.name"/>
      <input [(ngModel)]="meal.description"/>
      <input [(ngModel)]="meal.image"/>
      <input [(ngModel)]="meal.calories"/>
      <input [(ngModel)]="meal.sodium"/>
      <input [(ngModel)]="meal.sugar"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}

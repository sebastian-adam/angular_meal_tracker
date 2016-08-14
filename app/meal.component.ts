import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <h3>{{ meal.image }}</h3>
    <h3>{{ meal.name }}</h3>
    <h3>{{ meal.description }}</h3>
    <ul>
      <li>{{ "Calories: " + meal.calories }}</li>
      <li>{{ "Sodium: " + meal.sodium + "mg" }}</li>
      <li>{{ "Sugar: " + meal.calories + "g" }}</li>
    </ul>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  healthful(){
    if (this.meal.calories < 500) {
      this.meal.healthful = true;
    }
  }
}

import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <img src="{{ meal.image }}" alt="photo of {{ meal.name }}">
    <h3 class="meal-name">{{ meal.name }}</h3>
    <h4>{{ meal.description }}</h4>
    <ul>
      <li>{{ "Calories: " + meal.calories }}</li>
      <li class="middle-li">{{ "Sodium: " + meal.sodium + "mg" }}</li>
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

import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthful",
  pure: false
})
export class HealthfulPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalories = args[0];
    if(desiredCalories === 'not-healthful') {
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else if (desiredCalories === "healthful") {
      return input.filter((meal) => {
        return meal.calories <= 500;
      });
    } else {
      return input;
    }
  }
}

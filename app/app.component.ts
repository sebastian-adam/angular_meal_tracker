import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="main">
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Bacon Cheeseburger TOASTER", "Get your beef and cheese sandwiched between two thick slices of Texas Toast. Then top it off with crinkle-cut pickles, chopped onions, fresh shredded lettuce, ripe tomatoes, a freshly prepared onion ring & hickory BBQ sauce. It's the ultimate burgwich.", 850, 1490, 14, 0),
      new Meal("Loaded Bacon Ranch Chili Cheese Coney", "The ultimate combination of crispy bacon, chili and melty cheese. The Loaded Bacon Ranch Chili Cheese Coney is made with 100 percent beef and topped with chili, shredded cheese, crisp bacon and zesty ranch.", 510, 1600, 5, 1),
      new Meal("SONIC Blast made with M&M’S Chocolate Candies", "Sweet, cold, real vanilla ice cream blended with colorful M&M’S Chocolate Candies.", 520, 200, 58, 2)
    ];
  }

}

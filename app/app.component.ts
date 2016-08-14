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
      new Meal("Bacon Cheeseburger TOASTER", "Get your beef and cheese sandwiched between two thick slices of Texas Toast. Then top it off with crinkle-cut pickles, chopped onions, fresh shredded lettuce, ripe tomatoes, a freshly prepared onion ring & hickory BBQ sauce. It's the ultimate burgwich.", "https://lh3.googleusercontent.com/87M6X6hiETZcuH7ViT87KncCMr7nnSOJH1djalKHDDfEAjUb2yBbSqBtofso_ecls1YClzOFaoAldam9Iskh_A=s400", 850, 1490, 14, 0),
      new Meal("Loaded Bacon Ranch Chili Cheese Coney", "The ultimate combination of crispy bacon, chili and melty cheese. The Loaded Bacon Ranch Chili Cheese Coney is made with 100 percent beef and topped with chili, shredded cheese, crisp bacon and zesty ranch.", "https://lh3.googleusercontent.com/gfABX2nEYjP4QsjQue8xLVvyPaM9F6N_EFDFnLK-2YixOcRy2oSjgW_9mkPOWd3iy5CFa_pUrssfR6UcTJGZ=s400", 510, 1600, 5, 1),
      new Meal("SONIC Blast made with M&M’S Chocolate Candies", "Sweet, cold, real vanilla ice cream blended with colorful M&M’S Chocolate Candies.", "https://lh6.ggpht.com/q40wT2o8aiwhYmRdO1SzSDPYYEEsLbj-lFJQV91AgBN2iXaawV2gGhDFhjWGRVj0GhnIEGwvDKVXJzkmt95Z=s400", 520, 200, 58, 2)
    ];
  }

}

System.register(['angular2/core', './meal-list.component', './meal.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_list_component_1, meal_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [
                        new meal_model_1.Meal("Bacon Cheeseburger TOASTER", "Get your beef and cheese sandwiched between two thick slices of Texas Toast. Then top it off with crinkle-cut pickles, chopped onions, fresh shredded lettuce, ripe tomatoes, a freshly prepared onion ring & hickory BBQ sauce. It's the ultimate burgwich.", "https://lh3.googleusercontent.com/87M6X6hiETZcuH7ViT87KncCMr7nnSOJH1djalKHDDfEAjUb2yBbSqBtofso_ecls1YClzOFaoAldam9Iskh_A=s400", 850, 1490, 14, 0),
                        new meal_model_1.Meal("Loaded Bacon Ranch Chili Cheese Coney", "The ultimate combination of crispy bacon, chili and melty cheese. The Loaded Bacon Ranch Chili Cheese Coney is made with 100 percent beef and topped with chili, shredded cheese, crisp bacon and zesty ranch.", "https://lh3.googleusercontent.com/gfABX2nEYjP4QsjQue8xLVvyPaM9F6N_EFDFnLK-2YixOcRy2oSjgW_9mkPOWd3iy5CFa_pUrssfR6UcTJGZ=s400", 510, 1600, 5, 1),
                        new meal_model_1.Meal("SONIC Blast made with M&M’S Chocolate Candies", "Sweet, cold, real vanilla ice cream blended with colorful M&M’S Chocolate Candies.", "https://lh6.ggpht.com/q40wT2o8aiwhYmRdO1SzSDPYYEEsLbj-lFJQV91AgBN2iXaawV2gGhDFhjWGRVj0GhnIEGwvDKVXJzkmt95Z=s400", 520, 200, 58, 2)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n    <div class=\"main\">\n      <meal-list [mealList]=\"meals\"></meal-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
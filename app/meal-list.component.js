System.register(['angular2/core', './meal.component', './meal.model', './edit-meal-details.component', './new-meal.component', './healthful.pipe'], function(exports_1, context_1) {
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
    var core_1, meal_component_1, meal_model_1, edit_meal_details_component_1, new_meal_component_1, healthful_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (healthful_pipe_1_1) {
                healthful_pipe_1 = healthful_pipe_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterHealthfulChoices = "healthful";
                }
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    console.log(clickedMeal);
                    this.selectedMeal = clickedMeal;
                };
                MealListComponent.prototype.createMeal = function (name, description, image, calories, sodium, sugar) {
                    this.mealList.push(new meal_model_1.Meal(name, description, image, calories, sodium, sugar, this.mealList.length));
                };
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterHealthfulChoices = filterOption;
                    console.log(this.filterHealthfulChoices);
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        pipes: [healthful_pipe_1.HealthfulPipe],
                        directives: [meal_component_1.MealComponent, edit_meal_details_component_1.EditMealDetailsComponent, new_meal_component_1.NewMealComponent],
                        template: "\n  <div class=\"meal-container\">\n    <h1>Cheat Meal Tracker</h1>\n    <div>\n      <h3>Sort by healthful choices</h3>\n      <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n        <option value=\"healthful\">Meals less than 500 calories</option>\n        <option value=\"not-healthful\">Meals more than 500 calories</option>\n        <option value=\"all\" selected=\"selected\">All Meals</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"meal-container\">\n    <meal-display class=\"meal\" *ngFor=\"#currentMeal of mealList | healthful:filterHealthfulChoices\"\n      (click)=\"mealClicked(currentMeal)\"\n      [class.selected]=\"currentMeal === selectedMeal\"\n      [meal]=\"currentMeal\">\n    </meal-display>\n  </div>\n  <edit-meal-details *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\"></edit-meal-details>\n  <new-meal (onSubmitNewMeal)=\"createMeal($event.name, $event.description, $event.image, $event.calories, $event.sodium, $event.sugar)\"></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map
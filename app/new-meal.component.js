System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.onSubmitNewMeal = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addMeal = function (inputName, inputDescription, inputImage, inputCalories, inputSodium, inputSugar) {
                    this.onSubmitNewMeal.emit({ name: inputName.value,
                        description: inputDescription.value,
                        image: inputImage.value,
                        calories: parseInt(inputImage.value),
                        sodium: parseInt(inputSodium.value),
                        sugar: parseInt(inputSugar.value) });
                    inputName.value = '';
                    inputDescription.value = '';
                    inputImage.value = '';
                    inputCalories.value = '';
                    inputSodium.value = '';
                    inputSugar.value = '';
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        outputs: ['onSubmitNewMeal'],
                        template: "\n  <div class=\"meal-form\">\n    <h3>Add Meal:</h3>\n    <input type=\"text\" placeholder=\"Name\" class=\"\" #newName>\n    <input type=\"text\" placeholder=\"Description\" class=\"\" #newDescription>\n    <input type=\"text\" placeholder=\"Image\" class=\"\" #newImage>\n    <input type=\"number\" placeholder=\"Calories\" class=\"\" #newCalories>\n    <input type=\"number\" placeholder=\"Sodium\" class=\"\" #newSodium>\n    <input type=\"number\" placeholder=\"Sugar\" class=\"\" #newSugar>\n    <button (click)=\"addMeal(newName, newDescription, newImage, newCalories, newSodium, newSugar)\" class=\"btn-add-meal\">Add</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map
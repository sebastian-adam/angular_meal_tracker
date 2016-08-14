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
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MealComponent = (function () {
                function MealComponent() {
                }
                MealComponent.prototype.healthful = function () {
                    if (this.meal.calories < 500) {
                        this.meal.healthful = true;
                    }
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        inputs: ['meal'],
                        template: "\n  <div>\n    <image src={{ '\"' meal.image '\"' }} alt=\"photo of {{ meal.name }}\">\n    <h3>{{ meal.name }}</h3>\n    <h3>{{ meal.description }}</h3>\n    <ul>\n      <li>{{ \"Calories: \" + meal.calories }}</li>\n      <li>{{ \"Sodium: \" + meal.sodium + \"mg\" }}</li>\n      <li>{{ \"Sugar: \" + meal.calories + \"g\" }}</li>\n    </ul>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    }
});
//# sourceMappingURL=meal.component.js.map
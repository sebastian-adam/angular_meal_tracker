import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
  <div class="meal-form">
    <h3 class="add-meal">Add Meal:</h3>
    <input type="text" placeholder="Name" class="" #newName>
    <input type="text" placeholder="Description" class="" #newDescription>
    <input type="text" placeholder="Image" class="" #newImage>
    <input type="number" placeholder="Calories" class="" #newCalories>
    <input type="number" placeholder="Sodium" class="" #newSodium>
    <input type="number" placeholder="Sugar" class="" #newSugar>
    <button (click)="addMeal(newName, newDescription, newImage, newCalories, newSodium, newSugar)" class="btn-add-meal">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(inputName: HTMLInputElement, inputDescription: HTMLInputElement, inputImage: HTMLInputElement, inputCalories: HTMLInputElement, inputSodium: HTMLInputElement, inputSugar: HTMLInputElement){
    this.onSubmitNewMeal.emit({name: inputName.value,
       description: inputDescription.value,
       image: inputImage.value,
       calories: parseInt(inputCalories.value),
       sodium: parseInt(inputSodium.value),
       sugar: parseInt(inputSugar.value)});
    inputName.value = '';
    inputDescription.value = '';
    inputImage.value = '';
    inputCalories.value = '';
    inputSodium.value = '';
    inputSugar.value = '';
  }
}

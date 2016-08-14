export class Meal {
  public healthful:boolean = true;
  constructor(public name: string, public description: string, public calories: number, public sodium: number, public sugar: number, public id: number){}
}

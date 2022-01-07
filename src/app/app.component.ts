import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  show = false;

  recipeName: string = '';
  recipeInstructions: string = '';
  recipe_Name: string = '';
  recipe_Instructions: string = '';

  onClick() {
    this.show = !this.show;
  }
  addRecipe() {
    
    console.log(this.recipeName);
    console.log(this.recipeInstructions);
    this.recipe_Name = this.recipeName;
    this. recipe_Instructions = this.recipeInstructions;
    
    
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  show = false;
  recipe_Name: any = '';
  @ViewChild("recipeName") recipeName:any;
  //constructor() { }

  ngOnInit() {
  }
  onClickSubmit(recipeForm:any) {
    console.log("You have entered : " , recipeForm.recipeName); 
    console.log("You have entered : " , recipeForm.recipeInstructions);
    //this.recipe_Name = recipeForm.recipeName;
    this.recipe_Name = this.recipeName.nativeElement.value;
 }
 onClick() {
  this.show = !this.show;
}
}

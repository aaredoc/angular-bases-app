import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toLocaleUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`

  }

  public changeHero():void {
    this.name = 'Spiderman';
  }

  public changeAge():void {
    this.age = 20;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

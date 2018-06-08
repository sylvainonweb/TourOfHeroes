import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor() {
    }

    ngOnInit() {
        this.heroes = [];
        for (let i = 1; i < 10; i++) {
            const hero: Hero = new Hero();
            hero.id = i;
            hero.name = 'Héro ' + i;
            this.heroes.push(hero);
        }
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../hero';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor() { }

    getHeroes(): Hero[] {
        const heroes: Hero[] = [];
        for (let i = 1; i < 10; i++) {
            const hero: Hero  = new Hero();
            hero.id = i;
            hero.name = 'Héro ' + i;
            heroes.push(hero);
        }
        return heroes;
    }
}

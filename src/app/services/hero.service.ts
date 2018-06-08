import { Injectable } from '@angular/core';
import { Hero, HEROES } from '../hero';
import { Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor() { }

    getHeroes(): Observable<Hero[]> {
        const heroes: Hero[] = [];
        for (let i = 1; i < 10; i++) {
            const hero: Hero  = new Hero();
            hero.id = i;
            hero.name = 'Héro ' + i;
            heroes.push(hero);
        }
        return of(heroes);
    }
}
